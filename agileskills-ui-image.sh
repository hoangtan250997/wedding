#! /bin/sh

echo "Step 1: Building the Docker image..."
sudo docker build -f Dockerfile -t agileskills-ui .

# Check if the Docker build was successful
if [ $? -ne 0 ]; then
  echo "Docker image build failed."
  exit 1
fi

echo "Docker image successfully built and tagged as agileskills-ui."

echo "Step 2: Redeploy the kubernetes pod..."
sudo kubectl get pods -n agileskills| grep -i 'agileskills-ui-' | awk '{print $1}' | xargs sudo kubectl delete pod -n agileskills

# **kubectl set image deployment/agileskills-ui *=agileskills-ui:latest**

# if old and new image have different tag, can use this cmd to update pods without delete. You can edit in agileskills-ui-image.sh.

if [ $? -ne 0 ]; then
  echo "Redeploy the kubernetes pod failed."
  exit 1
fi

echo "Redeploy the kubernetes pod successfully built "


