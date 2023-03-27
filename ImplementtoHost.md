```
sudo apt update && sudo apt upgrade
```
```
sudo apt install nginx
```
```
sudo systemctl start nginx
```
```
sudo systemctl status nginx
```
```
sudo ufw allow 'Nginx Full'
```
```
ufw allow OpenSSH
```
```
ufw enable
```
```
sudo nano /etc/nginx/sites-available/xxx.xxx
```

```
server {
        client_max_body_size 64M;
        listen 80;
        server_name xxx.xxx;

        location / {
                proxy_pass             http://127.0.0.1:3000;
                proxy_read_timeout     60;
                proxy_connect_timeout  60;
                proxy_redirect         off;

                # Allow the use of websockets
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

}
```
```
sudo ln -s /etc/nginx/sites-available/xxx.xxx /etc/nginx/sites-enabled/
```
```
sudo nginx -t
```
```
sudo systemctl restart nginx
```
```
sudo apt install -y nodejs
```
```
npm install pm2 -g
```
```
git clone https://github.com/<your Github username>/<your project name>.git  next-app
```
cd next-app
```
npm install
```
```
npm run build
```
```
pm2 start npm --name "my-next-app" -- start
```
```
pm2 status
// pm2 stop my-next-app
// pm2 restart my-next-app

http://<your domain>
```
sudo apt install certbot python3-certbot-nginx
```
```
sudo certbot --nginx -d xxx.xxx
```
```
sudo systemctl restart nginx
```

// Update 
  ```
git pull
npm install
npm run build
pm2 restart my-next-app
  ```


