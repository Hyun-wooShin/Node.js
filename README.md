# Node.js exercise

## 001 
### Javascript Basic
- play1.js : 화살표 함수
- play2.js : this 사용
- play3.js : 배열
- play4.js : Spread, Rest
- play5.js : 객체구조분해
- play6.js : 비동기코드, 프로미스

## 002 
### 기본 개념 이해
- app1.js : 서버만들기, 요청과 응답
- app2.js : 요청과응답헤더, 라우터요청, 요청리다이렉션, 요청본문분석, 블로킹 및 논블로킹
- app3.js : NodeModule 시스템 사용

## 003
### 개선된 개발 워크플로우 및 디버깅
- 설명.md : npm 사용해보기
- 설명.md : nodemon을 local dependency로 설정
- 설명.md : 디버그 설정 

## 004
### Express.js
- 설명.md : Express.js 설치, body-parser설치
- app1.js : Express.js 기본 사용
- app2.js : Express.js 라우트 사용
- app3.js : 수신요청분석 , POST요청으로 미들웨어 실행제한
- app4.js : Express.js 라우트 분리 사용 (필터사용, 필터미사용)
- app5.js : Dumy html이 아닌 html 파일(view) 생성
- app6.js : html 파일의 경로를 알아올때 main 프로세스가 존재하는 폴더경로로 세팅하기 , 파일 정적 서비스

## 005
### 템플릿엔진(pug)
- 설명.md : 세가지 모듈(pug , ejs, handlebar) 설치
- pug는 html을 경량화 시켜 사용할 수 있는 장점이 있다
- app1.js : pug 사용

## 006
### 템플릿엔진(handlebar)
- 설명.md : handlebar 설치
- handlebar는 express에 표현식을 두고  handlebar는 최대한 표현식 없이 간결하다.
- app1.js : handlebar 사용

## 007
### 템플릿엔진(EJS)
- EJS는 layout이 없어 include를 사용해야한다. 그러나 javascript 표현식을 쓸 수 있는 장점이 있다.
- app1.js : EJS 사용

## 008
### MVC
- app1.js : MVC 사용 => Controller , Model 추가

## 009
### 예제 프로젝트 전체 기능 완성(1)
- app1.js 
  - 사용자단(Shop) , 관리자단(Admin) 기능 분리  
  - 관리자단(Admin)에 Product 추가,편집,삭제 기능 구현

## 010
### 예제 프로젝트 전체 기능 완성(2) 
- 작은 화면 및 모바일 화면을 위한 모바일 내비게이션 추가. 그 외 사소한 부분 수정
- 상세 페이지 구현 , 장바구니 구현
- 라우트에 동적 데이터 전달
- ejs include구문 사용시 두번째 파라메터에 변수 던지기