# 모두의 발레 앱

## 개요

모두의 발레 서비스를 위한 앱입니다.

## 개발 환경

- Node.js 18.14.2
- Typescript 4.9.4
- React 18.2.0
- React Native 0.71.3

### 개발 환경 구축 팁

[nvm](https://github.com/nvm-sh/nvm)과 [direnv](https://direnv.net/)를 이용하여
이 프로젝트에서 사용할 Node.js 버전을 자동으로 설정할 수 있습니다.

예시 `.envrc` 파일

```.envrc
. "/usr/local/opt/nvm/nvm.sh"
nvm use v18.14.2
```

## 실행 방법

### 의존성 설치

```bash
  $ npm install
```

### Expo 실행

```bash
  $ npm start
```

### 플랫폼 별 실행

```bash
  $ npm run ios
```

또는

```bash
  $ npm run android
```
