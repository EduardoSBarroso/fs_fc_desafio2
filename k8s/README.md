# fs_fc_desafio2
kubernetes rodando localmente
# Imersão Full Stack & Full Cycle 2 - Desafio 2

![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

## Criação do cluster
`kind create cluster --name <cluster_name>`

## Subindo server

<h4 style="font-bold:italic;color:#39FF14">Executar os seguintes comandos na raiz da pasta k8s</h4>

`kubectl apply -f nest-app/deploy.yaml`
`kubectl apply -f nest-app/service.yaml`
`kubectl expose -f nest-app/deploy.yaml`
`kubectl port-forward service/nest-app 3000`

<h4 style="font-style:italic;color:#39FF14">Executar os seguintes comandos na raiz da pasta k8s</h4>

## Subindo web

`kubectl apply -f react-app/deploy.yaml`
`kubectl apply -f react-app/service.yaml`
`kubectl expose -f react-app/deploy.yaml`
`kubectl port-forward service/react-app 3001`

## Pods

`kubectl get pods`

## Services

`kubectl get svc`

## Delete cluster

`kind delete cluster --name <cluster_name>`

## Kubernetes k8s

![Badge](https://img.shields.io/static/v1?label=Go&message=reference&color=blue&style=for-the-badge&logo=ghost)
