Build and run locally:

```
docker build -t <docker-username>/hello-next@0.1.0 .
docker run [image_id or image_tag] 
docker run -it [image_id or image_tag] [cmd]
docker run -it [image_id or image_tag] sh
```

Login and push image to ECR:

```
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 054895019529.dkr.ecr.us-east-1.amazonaws.com
docker tag mcgaryes/hello-next:latest 054895019529.dkr.ecr.us-east-1.amazonaws.com/mcgaryes/hello-next:latest
docker push 054895019529.dkr.ecr.us-east-1.amazonaws.com/mcgaryes/hello-next:latest
```