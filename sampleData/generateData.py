import json
import random
import sys
import math
from faker import Faker
fake = Faker()
# Latitude and longitude
radius = 10000                         #Choose your own radius
radiusInDegrees=radius/111300
r = radiusInDegrees
x0 = 40.84
y0 = -73.87

for i in range(10):
    fkName = fake.name()
    print (fkName)
    with open('data.json', 'a') as outfile:
        json.dump(fkName, outfile)
    with open('data.json','a') as comm:
        comm.write(',')
        u = float(random.uniform(0.0,1.0))
        v = float(random.uniform(0.0,1.0))
        w = r * math.sqrt(u)
        t = 2 * math.pi * v
        x = w * math.cos(t)
        y = w * math.sin(t)
        xLat  = x + x0
        yLong = y + y0
    outfile = open("data.json", "a")
    outfile.write (str(xLat) + "," + str(yLong) + '\n')
