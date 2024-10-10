typescript compiler설치해야함
06-typescript 폴더 하위 전역에 tsc를 사용하기 위해서 
06-typescript 폴더에 설치한다

cd 06-typescrpt로 가고 ,,=>npm install typescript 
==>npm으로 설치된것은 node_modules에 다운로드된다
==>node modules에 설치된 모든것은 node_modules가 있는 그 폴더의 모든 하위에서 사용이 가능하다

설치된 컴파일러를 이용해 ts파일을 js파일로 컴파일 시킨다
npx-node의 명령어이다 (tsc라는 컴파일러를 실행시키고 없다면 다운로드 해라)
//개발자가만든 ts폴더가 있는 곳에서 실행시켜야함 -> cd test1-tsc
> npx tsc main.ts


>그러면 만들지도 않은 main.js가 생김(main.ts가 복사되어)

index.html에 main.js로 스크립트를 건다
