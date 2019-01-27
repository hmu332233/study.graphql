## study.graphql

### 설치
```bash
$ npm install --save graphql-yoga
```

### graphql로 해결할 수 있는 것
- over-fetching
  - 내가 요청한 영역의 정보보다, 많은 정보를 서버로부터 받는 것
  - 이러한 over-fetching 없이 코드를 짤 수 있고 개발자가 어떤 정보를 원하는 지에 대해 통제할 수 있다.
- under-fetching
  - REST에서 하나를 완성하려고 많은 소스를 요청하는 것
  - 예를 들어 한 페이지에서 화면을 띄우기 위해 /users, /posts/32, /notifications와 같이 여러번 REST를 호출하는 것