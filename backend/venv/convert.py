import camelot
import pandas as pd

tables = camelot.read_pdf("bank.pdf", pages="all")

print(tables)
