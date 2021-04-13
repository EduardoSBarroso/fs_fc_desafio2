# fs_fc_desafio2
kubernets rodando localmente
# Imersão Full Stack & Full Cycle 2 - Desafio 2

![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

## Criação do cluster
`kind create cluster --name <cluster_name>`

## Subindo o server

`kubectl apply -f nest-app/deploy.yaml`
`kubectl apply -f nest-app/service.yaml`
`kubectl expose -f nest-app/deploy.yaml`
`kubectl port-forward service/nest-app 3000`

## Subindo o server

`kubectl apply -f react-app/deploy.yaml`
`kubectl apply -f react-app/service.yaml`
`kubectl expose -f react-app/deploy.yaml`
`kubectl port-forward service/react-app 3001`

## Pods

`kubectl get pods`

## Services

`kubectl get svc`

## Services

`kind delete cluster --name <cluster_name>`

## Kubernetes k8s

<img src="https://img.shields.io/static/v1?label=Go&message=reference&color=blue&style=for-the-badge&logo=ghost"/>
<img src="https://img.shields.io/static/v1?label=cii best practices&message=passing&color=green&style=for-the-badge&logo=ghost"/>
