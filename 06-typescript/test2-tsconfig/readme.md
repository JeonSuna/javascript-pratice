두번재 test는 
tsc(타입스크립트 컴파일러)->개발자가 만든 type script를 java script로 변화하는 도구이다.
개발자가 typescript러 작성한 코드를 실행하려면 먼저tsc를 사용해 이를 javascript 코드로 변환해야한다

이때 tsconfig.json파일은 개발자의 설정 (typescript가~게 동작하면 돼)을 지정하고 tsc(타입스크립트 컴파일러)가 설정 정보대로 동작하게끔 한다 

npm,npx는 tool이다.

-npm-node.js의 명령어로 Node.js의 package(라이브러리) 관리하는 툴이다
-npm을 가지고 package 설치,삭제,업데이트 가능
-package.json는 npm 프로젝트의 환경 및 설정 파일(npm이 어떻게 동작하면 된다는..)이다 

npx는 npm의 패키지를 실행하는 데 사용하는 도구입니다. npm을 사용해 설치한 CLI(Command Line Interface) 도구를 별도로 설치하지 않고도 실행할 수 있게 해줍니다.
예를 들어, npx tsc 명령어는 프로젝트에 TypeScript를 설치하지 않고도 컴파일을 실행할 수 있도록 도와줍니다.

 //npm으로 관리되는 프로젝트 초기화....
자동으로  package.json(npm한경파일 or 프로젝트 설정파일) 이 하나 만들어진다

> npm init ->package를 최초로 만드는 명령어, 즉package.json을 생성하여 프로젝트를  npm으로 관리할 수 있도록 해준다 

//필요한 lib(package)ghrdms tool 다운로드
//npm install xxx-npm repository server로부터 xxx패키지를 다운로드 받는 명령어
-D옵션을 주면 tool
> npm install -D typescript

//tsconfig (ts환경파일) 준비
>npx tsc -init

//tsc의  설정 내용을 tconfig.json에 기록
//tscㄹ transpile
>npx tsc


node에서 자바스크립트를 실행시키겠다 -> (>node js파일명)