from fastapi import FastAPI  # type: ignore
from db.connect_db import engine, Base
from controller import employee_controller

app = FastAPI(title="Employee API")

# Create tables on startup
@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

app.include_router(employee_controller.router)
