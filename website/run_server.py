from datetime import datetime
import subprocess

while True:
    print ("Server start on " + str(datetime.now()))
    subprocess.call('sudo python3 web_server.py -p 80', shell=True)