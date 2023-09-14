# AWS Lambda 

To use the SAM CLI, you need the following tools.

- SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- Node.js - [Install Node.js 18](https://nodejs.org/en/), including the NPM package management tool.
- Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community)
  - Add a `DOCKER_HOST` variable to your `~/.bashrc` or `./.zshrc`  
    ```
    $ export DOCKER_HOST=unix://$HOME/.docker/run/docker.sock
    ```

To make it sure that your env. is ready, run the following command
```bash
$ sam --version
SAM CLI, version 1.97.0
$ docker --version
Docker version 24.0.2, build cb74dfc
$ echo $DOCKER_HOST
unix:///Users/allenkim/.docker/run/docker.sock
```

SAM: Serverless Application Model
 - an extension of the AWS CLI
 - adds functionality for building and testing Lambda applications
 - uses Docker to run in an Amazon Linux environment
 - `template.yaml` : AWS resources including Lambda functions and API Gageway

## Use SAM CLI to build and test locally

To run with a browser
```bash
$ npm i
$ sam build           # Build your application with the `sam build` command.
$ sam local start-api # Run AWS serverless functions locally as a HTTP API
$ # or run as one-liner, rm -rf .aws-sam node_modules && npm i && sam build && sam local start-api
```
![image](https://github.com/allenhwkim/aws-lambda-typescript/assets/1437734/c31c8c13-ef01-4892-aec6-90651a5c18b7)

To run from CLI
```bash
$ sam local invoke HelloFunction
Invoking app.helloHandler (nodejs18.x)                                                                                       
Local image is up-to-date                                                                                                    
Using local image: public.ecr.aws/lambda/nodejs:18-rapid-x86_64.                                                             
                                                                                                                             
Mounting ~/lambda-local/aws-lambda-typescript/.aws-sam/build/HelloFunction as /var/task:ro,delegated, inside   
runtime container                                                                                                            
START RequestId: 7be0cfc3-076f-41de-90a3-dc7289559ca8 Version: $LATEST
END RequestId: 7be0cfc3-076f-41de-90a3-dc7289559ca8
REPORT RequestId: 7be0cfc3-076f-41de-90a3-dc7289559ca8  Init Duration: 0.81 ms  Duration: 955.20 ms     Billed Duration: 956 ms      Memory Size: 128 MB     Max Memory Used: 128 MB
{"statusCode": 200, "body": "{\"message\":\"hello you, 639bae9ac6b3e1a84cebb7b403297b79\"}"}% 
```
