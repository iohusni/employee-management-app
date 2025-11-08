from sqlalchemy.ext.asyncio import AsyncSession  # type: ignore
from sqlalchemy import select  # type: ignore
from model.employee_model import Employee  # type: ignore
from mapper.employee_mapper import EmployeeCreateMapper


# Create Employee
async def create_employee(db: AsyncSession, employee_data: EmployeeCreateMapper):
    new_employee = Employee(**employee_data.model_dump())
    db.add(new_employee)
    await db.commit()
    await db.refresh(new_employee)
    return new_employee


# Get All Employees
async def get_all_employees(db: AsyncSession):
    result = await db.execute(select(Employee))
    return result.scalars().all()


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
