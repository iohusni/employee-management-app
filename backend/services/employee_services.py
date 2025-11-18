from sqlalchemy.ext.asyncio import AsyncSession  # type: ignore
from sqlalchemy import select, func, asc, desc  # type: ignore
from model.employee_model import Employee  # type: ignore
from mapper.employee_mapper import EmployeeCreateMapper
from typing import Optional  # type: ignore
import math  # type: ignore


# Create Employee
async def create_employee(db: AsyncSession, employee_data: EmployeeCreateMapper):
    new_employee = Employee(**employee_data.model_dump())
    db.add(new_employee)
    await db.commit()
    await db.refresh(new_employee)
    return new_employee


# Get All Employees with Pagination and Sorting
async def get_all_employees(
    db: AsyncSession,
    page: int,
    page_size: int,
    sort_by: Optional[str] = None,
    sort_order: str = "asc"
):
    # Validate page_size is a positive integer (using SQLAlchemy ORM, no default values)
    # The validation is handled at the controller level via Query(ge=1)
    # Here we just ensure it's used directly without any default fallback
    
    # Validate sort_by column (must be a valid Employee column)
    valid_sort_columns = ["id", "name", "email", "phone", "address", "city", "state"]
    sort_column = None
    if sort_by and sort_by.lower() in valid_sort_columns:
        sort_column = getattr(Employee, sort_by.lower())
    
    # Validate sort_order
    sort_order_lower = sort_order.lower() if sort_order else "asc"
    if sort_order_lower not in ["asc", "desc"]:
        sort_order_lower = "asc"
    
    # Build base query
    query = select(Employee)
    
    # Apply sorting
    if sort_column:
        if sort_order_lower == "desc":
            query = query.order_by(desc(sort_column))
        else:
            query = query.order_by(asc(sort_column))
    else:
        # Default sorting by id ascending
        query = query.order_by(asc(Employee.id))
    
    # Get total count
    count_query = select(func.count()).select_from(Employee)
    total_result = await db.execute(count_query)
    total = total_result.scalar_one()
    
    # Apply pagination
    offset = (page - 1) * page_size
    query = query.offset(offset).limit(page_size)
    
    # Execute query
    result = await db.execute(query)
    employees = result.scalars().all()
    
    # Calculate total pages
    total_pages = math.ceil(total / page_size) if total > 0 else 0
    
    return {
        "employees": employees,
        "total": total,
        "page": page,
        "page_size": page_size,
        "total_pages": total_pages
    }


# Get Single Employee by ID
async def get_employee_by_id(db: AsyncSession, employee_id: int):
    result = await db.execute(select(Employee).where(Employee.id == employee_id))
    return result.scalar_one_or_none()


# Update Employee
async def update_employee(db: AsyncSession, employee_id: int, data: EmployeeCreateMapper):
    employee = await get_employee_by_id(db, employee_id)
    if not employee:
        return None

    for key, value in data.model_dump().items():
        setattr(employee, key, value)

    await db.commit()
    await db.refresh(employee)
    return employee


# Delete Employee
async def delete_employee(db: AsyncSession, employee_id: int):
    employee = await get_employee_by_id(db, employee_id)
    if not employee:
        return None

    await db.delete(employee)
    await db.commit()
    return {"message": "Employee deleted successfully"}
