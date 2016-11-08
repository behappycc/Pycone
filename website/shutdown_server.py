import time
from datetime import datetime
import subprocess

while True:
    time.sleep(3600)
    print ("Server shutdown on " + str(datetime.now()))
    subprocess.call('sudo pkill -f web_server.py', shell=True)