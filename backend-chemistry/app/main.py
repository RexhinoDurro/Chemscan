from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import balance, calculate, safety

app = FastAPI(title="ChemScan Chemistry Engine", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(balance.router, prefix="/api/chemistry", tags=["Balance"])
app.include_router(calculate.router, prefix="/api/chemistry", tags=["Calculate"])
app.include_router(safety.router, prefix="/api/chemistry", tags=["Safety"])


@app.get("/health")
async def health():
    return {"status": "healthy", "service": "chemistry-engine"}
