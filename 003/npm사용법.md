## npm 사용해보기
- 터미널에서 npm init 
- 엔터 계속 치고 나면 (필요에 따라 입력해줘도 됨. 입력하지 않으면 default값 입력) 
- package.json 생성됨
- package.json 내부의 scripts 구역에 추가 => "start": "node app3.js"
- 터미널에서 npm start 하면 실행됨
- package.json 내부의 scripts 구역에 추가 => "start-server": "node app3.js" 하고
- 터미널에서 npm start-server 하면 에러 발생
- start를 제외한 나머지 것은 npm run start-server 와 같이 run을 포함 시켜줘야함.

## nodemon을 local dependency로 설정
예를 들어 터미널에서 node app.js와 같은 명령 실행 후 ctrl+C로 종료하고 다시 node app.js와 같은 명령 실행 하는 번거로움 없이
자동으로 재시작해주는 nodemon이 있는데 이것을 설치 해본다.

- 터미널에서 npm install nodemon --save-dev (여기서 --save 옵션은 프로덕트 --save-dev 옵션은 개발 이다)
- 설치 하고 나면 node_modules 폴더 생성됨
- package.json 에서 "start": "nodemon app3.js" 로 수정
- nodemon이 전역에 설치 되지 않았기 때문에 nodemon app3.js 명령은 에러 발생, 에러 안나게 하려면 npm install -g nodemon 로 설치하면됨
- npm start 명령 실행
- app3.js에서 변경사항이 일어나면 바로 바로 반영됨.
- node_modules 폴더는 제외하고 형상관리함. 그렇기 때문에 항상 소스를 새로 받을 경우 npm install을 먼저 실행해줘서 ode_modules 폴더가 생성되도록 해야한다.