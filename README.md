# Déploiement de Microservices Node.js avec Docker et Kubernetes (Minikube)

Ce projet contient deux microservices développés en Node.js, dockerisés et déployés dans un cluster Kubernetes à l'aide de Minikube. Le premier microservice est exposé à l'extérieur du cluster et appelle le second microservice via le réseau interne du cluster.

## Prérequis

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Étapes de Déploiement

### 1. Construire et Pousser les Images Docker

#### Microservice 1

1. Naviguez vers le répertoire du microservice 1 :

    ```bash
    cd microservice1
    ```

2. Construisez l'image Docker :

    ```bash
    docker build -t microservice1 .
    ```

#### Microservice 2

1. Naviguez vers le répertoire du microservice 2 :

    ```bash
    cd ../microservice2
    ```

2. Construisez l'image Docker :

    ```bash
    docker build -t microservice2 .
    ```

### 2. Démarrer Minikube

1. Démarrez Minikube :

    ```bash
    minikube start
    ```

### 3. Déployer les Microservices dans Kubernetes

#### Microservice 1

1. Appliquez le déploiement et le service :

    ```bash
    kubectl apply -f microservice1/kubernetes/deployment.yml
    kubectl apply -f microservice1/kubernetes/service.yml
    ```

#### Microservice 2

1. Appliquez le déploiement et le service :

    ```bash
    kubectl apply -f microservice2/kubernetes/deployment.yml
    kubectl apply -f microservice2/kubernetes/service.yml
    ```

### 4. Vérifier les Déploiements

1. Vérifiez que les pods sont en cours d'exécution :

    ```bash
    kubectl get pods
    ```

2. Vérifiez que les services sont créés :

    ```bash
    kubectl get services
    ```

### 5. Accéder aux Microservices

1. Obtenez l'URL du service exposé pour le microservice 1 :

    ```bash
    minikube service microservice1-service --url
    ```

2. Accédez à l'URL obtenue pour tester le microservice 1, qui appellera le microservice 2 en interne.
