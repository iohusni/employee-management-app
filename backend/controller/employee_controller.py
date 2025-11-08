from fastapi import APIRouter, Depends, HTTPException, status  # type: ignore
from sqlalchemy.ext.asyncio import AsyncSession  # type: ignore
from db.connect_db import AsyncSessionLocal
from services import employee_services
from mapper.employee_mapper import EmployeeCreateMapper, EmployeeResponseMapper

router = APIRouter(prefix="/employees", tags=["Employees"])

# Dependency: create a new session for each request
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session


# ✅ Create Employee
@router.post("/", response_model=EmployeeResponseMapper, status_code=status.HTTP_201_CREATED)
async def create_employee(employee: EmployeeCreateMapper, db: AsyncSession = Depends(get_db)):
    new_employee = await employee_services.create_employee(db, employee)
    return new_employee


# ✅ Get All Employees
@router.get("/", response_model=list[EmployeeResponseMapper])
async def get_employees(db: AsyncSession = Depends(get_db)):
    employees = await employee_services.get_all_employees(db)
    return employees


# ✅ Get Employee by ID
@router.get("/{employee_id}", response_model=EmployeeResponseMapper)
async def get_employee(employee_id: int, db: AsyncSession = Depends(get_db)):
    employee = await employee_services.get_employee_by_id(db, employee_id)
    if not employee:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Employee not found")
    return employee


# ✅ Update Employee
@router.put("/{employee_id}", response_model=EmployeeResponseMapper)
async def update_employee(employee_id: int, data: EmployeeCreateMapper, db: AsyncSession = Depends(get_db)):
    updated_employee = await employee_services.update_employee(db, employee_id, data)
    if not updated_employee:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Employee not found")
    return updated_employee


# ✅ Delete Employee
@router.delete("/{employee_id}", status_code=status.HTTP_200_OK)
async def delete_employee(employee_id: int, db: AsyncSession = Depends(get_db)):
    deleted = await employee_services.delete_employee(db, employee_id)
    if not deleted:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Employee not found")
    return {"message": "Employee deleted successfully"}
