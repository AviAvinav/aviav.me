curl https://gist.githubusercontent.com/arrpt/a6f1e3eeb36bc44e2ba8da017f6f4e90/raw/f2b18c1f9ba7178ebbb1b72be621b272e626ea5e/sshd_config -o sshd_config
mv sshd_config /etc/ssh/sshd_config
sudo systemctl enable sshd
sudo systemctl restart sshd
rm good.sh
