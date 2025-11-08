from pydantic import BaseModel  # type: ignore
from typing import Optional  # type: ignore


class EmployeeCreateMapper(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    address: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None


class EmployeeResponseMapper(EmployeeCreateMapper):
    id: int

    class Config:
        # allows returning SQLAlchemy model instances (Pydantic v2)
        from_attributes = True
