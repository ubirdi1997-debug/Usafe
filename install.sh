#!/usr/bin/env bash
set -e

echo "[1/9] Updating system..."
apt-get update
DEBIAN_FRONTEND=noninteractive apt-get -y upgrade

echo "[2/9] Installing XFCE..."
DEBIAN_FRONTEND=noninteractive apt-get install -y xfce4 xfce4-goodies

echo "[3/9] Installing utilities..."
apt-get install -y wget curl unzip ca-certificates gnupg software-properties-common

echo "[4/9] Installing XRDP..."
apt-get install -y xrdp
systemctl enable xrdp
echo "startxfce4" > /etc/skel/.xsession

echo "[5/9] Installing Brave..."
curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg \
https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg] https://brave-browser-apt-release.s3.brave.com/ stable main" \
> /etc/apt/sources.list.d/brave-browser-release.list
apt-get update
apt-get install -y brave-browser

echo "[6/9] Installing Docker..."
curl -fsSL https://get.docker.com | sh
systemctl enable docker

echo "[7/9] Installing Tailscale..."
curl -fsSL https://tailscale.com/install.sh | sh

echo "[8/9] Installing ThinLinc..."
cd /tmp
wget -O tl-server.zip https://www.cendio.com/downloads/server/tl-4.20.1-server.zip
unzip -o tl-server.zip
DIR=$(find . -maxdepth 1 -type d -name "tl-*server*" | head -n1)
if [ -z "$DIR" ]; then
  DIR=$(find . -maxdepth 2 -type d | grep "tl-" | head -n1)
fi
cd "$DIR"
./install-server

if [ -x /opt/thinlinc/sbin/tl-setup ]; then
  /opt/thinlinc/sbin/tl-setup
fi

echo "[9/9] Done."
echo "Reboot recommended."
