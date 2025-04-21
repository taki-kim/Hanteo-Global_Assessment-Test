# HANTEO GLOBAL 테스트 과제

Hanteo Global의 프론트엔드 과제입니다.  
구현 결과는 [링크](https://hanteo-global-assessment-test.vercel.app/)를 통해 확인하실 수 있습니다.

<br>

## 요구사항

- [x] 좌우 슬라이드 가능한 헤더 네비게이션 구현
- [x] 무한루프 동작 및 외부 링크 이동 가능한 슬라이드형 배너 구현
- [x] 무한스크롤이 가능한 콘텐츠 리스트형 뷰 구현

<br>

## 실행 스크립트

```
$ git clone <https://github.com/taki-kim/Hanteo-Global_Assessment-Test>
$ npm ci
$ npm run dev
```

<br>

## 기술스택

![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongo--db-47A248?style=for-the-badge&logo=mongoDB&logoColor=white)
![react-query](https://img.shields.io/badge/react--query-000000?style=for-the-badge&logo=reactquery&logoColor=white)
![타입스크립트](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

- 실제 DB와 연동되는 서버를 간단히 구현하기 위해 `NextJS` 프레임워크를 사용했습니다.
- `MongoDB`를 통해 임의로 구성한 차트리스트를 프로젝트와 연동했습니다.
- `react-query`를 통해 유지보수에 용이한 무한스크롤 구조를 적용했습니다.
- 타입관리에 안정성 있는 어플리케이션을 구현하고자 `typeScript`를 사용했습니다.

<br>

## 구현사항

### 좌우 슬라이드 가능한 헤더

뷰포트 너비가 모바일 사이즈 시, 터치 슬라이드가 가능한 헤더로 구현했습니다.

<details>
  <summary>자세히 보기</summary>
  
<br>

![스크롤헤더](https://github.com/user-attachments/assets/73ec07cb-b4ca-44c9-86cb-27926e07f086)

</details>

<br>

### 무한루프 슬라이드 캐러셀

4.5초 기준으로 실행되는 자체 무한 루프 캐러셀을 구현했습니다.  
라이브러리를 사용하지 않고, 브라우저의 이벤트를 활용하여 구현했습니다.  
터치 및 마우스 클릭 이벤트를 통해 다음 슬라이드로 스와이프가 가능합니다.

<details>
  <summary>자세히 보기</summary>
  
<br>

![캐러셀](https://github.com/user-attachments/assets/b1663186-95cb-4e04-98eb-a6ddbb06edb7)

</details>

<br>

### 무한 스크롤 콘텐츠 뷰

무한스크롤 형태의 콘텐츠 뷰를 구현했습니다.  
`mongoDb`로 연동한 DB에서 요청 시 마다 10개의 데이터를 요청받으며,  
`react-query`의 `useInfiniteQuery`를 통해 클라이언트에서 안정적으로 무한스크롤 형태의 뷰를 전달합니다.

<details>
  <summary>자세히 보기</summary>
  
<br>

![무한스크롤](https://github.com/user-attachments/assets/037186fa-7185-4b7d-a324-84c98c68c27a)

</details>

<br>

### 라이트/다크모드 (추가 구현)

브라우저의 쿠키를 활용하여 라이트/다크모드를 적용했습니다.

<details>
  <summary>자세히 보기</summary>
  
<br>

![다크모드 (1)](https://github.com/user-attachments/assets/f19780b6-7b7d-4451-a2cc-c1a301f2d0c1)

</details>

<br>

## 폴더 구조

```
📂 src
┣ 📂 app
┃  ┣ 📂 api --> route handlers ( 무한 스크롤 API )
┃  ┣ 📂 ... --> pages
┃  ┣ layout.tsx
┃  ┣ page.tsx
┣ 📂 components
┃  ┣ 📂 commons  --> 공용 컴포넌트
┃  ┣ 📂 carousel
┃  ┣ 📂 header
┃  ┣ 📂 footer
┃  ┣ 📂 ...
┣ 📂 public
┣ 📂 hooks
┣ 📂 utils
┣ 📂 lib
┣ constants.ts
```

</br>

## 컨벤션

| 커밋 컨벤션 |                            |
| ----------- | -------------------------- |
| feat        | 새로운 기능 추가           |
| fix         | 버그 수정                  |
| env         | 개발 환경 관련 설정        |
| design      | css 등 디자인 추가 및 수정 |
| refactor    | 코드 리팩토링              |
| simplify    | 간단한 코드 리팩토링       |
| comment     | 주석 추가/수정             |
| docs        | 내부 문서 추가/수정        |
| move        | 코드 및 파일의 이동        |
| rename      | 파일 및 폴더명 수정        |
| remove      | 파일 및 코드 삭제          |
