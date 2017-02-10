# from myproject import application

# if __name__ == "__main__":
#     application.run()
import socket
from web_server import application

if __name__ == '__main__':
    print("Server starting......")
    server_name = socket.getfqdn(socket.gethostname())
    server_ip = socket.gethostbyname(server_name)
    print (server_name, server_ip)

    if server_name == 'pttclustering-virtual-machine':
        application.run('140.112.42.151', port=80, debug=False)
    else:
        application.run(port=8000, debug=True)