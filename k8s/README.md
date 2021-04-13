# Imersão Full Stack & Full Cycle 2 - Challenge 3

![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

<div align="center">
    <h2>Kubernetes run local in your machine.<a href="https://kind.sigs.k8s.io/docs/user/quick-start#installation"> Kind</a> documentation</h2>
</div>

## Creation cluster
`kind create cluster --name <cluster_name>`

## Pod #1

`kubectl apply -f nest-app/deploy.yaml`
`kubectl apply -f nest-app/service.yaml`
`kubectl expose -f nest-app/deploy.yaml`
`kubectl port-forward service/nest-app 3000`

## Pod #2

`kubectl apply -f react-app/deploy.yaml`
`kubectl apply -f react-app/service.yaml`
`kubectl expose -f react-app/deploy.yaml`
`kubectl port-forward service/react-app 80`

## Pods

`kubectl get pods`

## Services

`kubectl get svc`

## Get all

`kubectl get all`

## Get nodes

`Kubectl get nodes`

## Delete cluster

`kind delete cluster --name <cluster_name>`

## Kubernetes k8s

![Badge](https://img.shields.io/static/v1?label=Go&message=reference&color=blue&style=for-the-badge&logo=ghost)
