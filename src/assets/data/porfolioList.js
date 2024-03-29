const portfolioList = [
  {
    name: "PORTFOLIO",
    participant: "1명",
    percent: "100%",
    period: "2주",
    project: "portfolio",
    response: "반응형",
    link: "http://helloimgee.github.io/0-introduce",
    mainImg: "project1/detail1.png",
    description: [
      {
        introduce: "프로젝트 소개 》포트폴리오를 소개하기 위한 페이지입니다.",
        background:
          "구현 배경 》 포트폴리오 내용에 집중할 수 있도록 직관적이고 쉬운 UI와 심플한 디자인, 반응성 좋은 SPA 방식을 활용하였습니다.",
        thought:
          "문제 해결 》   \n(1) gh-pages로 웹페이지 구현시 새로고침하면 에러가 생기는 문제 -> HashRouter   \n(2) gif 같은 대용량 이미지 github에 push 안 되는 문제 -> AWS S3 \n(3) AWS S3에서 이미지 불러올 때 로딩 시간이 긴 문제 -> ",
      },
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Styled-component",
      "Font-awesome",
      "AWS S3",
    ],
    image: [
      {
        url: "",
        name: "detail00.gif",
        tit: "공통 렌더링 애니메이션",
        desc: "모든 페이지가 렌더링될 때마다(새로고침, 페이지 이동 등) 나타나는 효과들 \n(1) preloader: 우측에서 좌측으로 날아오며 페이지가 전환되는 효과 \n(2) 상단 타이틀: 양쪽에서 글자가 날아드는 효과 \n(3) 좌측 메뉴바: 아래쪽에서 나타나는 효과 / 해당 메뉴 hover 혹은 해당 페이지로 이동시 메뉴 색상 활성화",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/inroduce/project1",
        name: "detail01.gif",
        tit: "메인 페이지",
        desc: "메인 페이지에서 시선을 사로잡기 위해 영상으로 배경 화면을 구성하였고, 각국의 인삿말을 통해 글로벌한 인재가 되겠다는 포부를 담았습니다.\n(1) 배경 영상: pc, mobile 버전으로 나누어서 반응형 구현 \n(2) 텍스트 애니메이션: 계속해서 글자가 지워지고 바뀌는 효과",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/inroduce/project1",
        name: "detail02.gif",
        tit: "소개 페이지",
        desc: "자기소개와 사용 가능한 기술 스택을 재미있게 소개하기 위해 Card 뒤집기 방식으로 구현하였습니다. \n(1) 자기소개: 뒷모습 이미지 hover시 돌아보는 느낌으로 이미지 전환(+움직이는 생생한 이미지) + 메시지 등장 \n(2) 기술스택: 카드를 뒤집었을 때 테두리가 그려지는 효과",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/inroduce/project1",
        name: "detail03.gif",
        tit: "프로젝트 페이지",
        desc: "프로젝트 리스트를 슬라이드 형식으로 구현 (라이브러리 없이 순수 react만으로 구현) \n(1) 메뉴: 전체, 개인, 팀 프로젝트로 나누어 포트폴리오 분류 / 해당 메뉴를 클릭할 때마다 아래 bar가 따라오는 효과 \n(2) 좌우 버튼: 더 이상 넘어갈 슬라이드가 없을 경우 사라지는 버튼 \n(3) 하단 원형 아이콘(페이징): 넘어갈 슬라이드가 있을 경우에만 등장 / 슬라이드 넘길 때마다 해당 아이콘 색상 활성화 / 좌우 버튼 대신 해당 아이콘 클릭해도 슬라이드 넘기기 가능 \n(4) 각 슬라이드:  hover시 이미지가 작아지면서 설명글과 함께 어두운 filter가 씌워지는 효과",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/inroduce/project1",
        name: "detail04.gif",
        tit: "메일 페이지",
        desc: "emailjs 라이브러리를 이용해 메일 보내기 기능을 구현하고, 정규 표현식을 통해 폼 유효성 검사를 하였습니다. \n(1) 이름: 입력시 -> 특수문자, 숫자, 한글 공백 입력 불가, 영어 공백 가능 / 제출시 -> 자음, 모음 분리 시 리턴(ex.홍ㄱㅣㄹ동)  \n(2) 이메일: 이메일 형식(abc@naver.com) 검사 -> 입력시 메시지 알림, 제출시 리턴 \n(3) 메시지: 5자 이상 작성 여부 검사 -> 입력시 메시지 알림, 제출시 리턴 \n(4) 버튼: 모든 입력란을 다 채웠을 경우에만 -> 버튼 색상 활성화, 제출 가능 \n(5) 전송: 전송되는 동안 로딩창 띄우기 / 전송 성공시 모든 입력란 초기화 / 보낸 메일은 실제 메일함에서 확인 가능",
      },
    ],
  },
  {
    name: "TOSS",
    participant: "1명",
    percent: "100%",
    period: "4주",
    project: "clone",
    response: "반응형",
    link: "https://helloimgee.github.io/01-TOSS",
    mainImg: "project2/main.png",
    description: [
      {
        introduce:
          "프로젝트 소개 》 토스 웹사이트를 참고해서 직접 구현한 토스 클론 개인 프로젝트입니다.",
        background:
          "구현 배경 》 React로 만든 웹사이트라고 해서 React를 공부하는데 도움이 될 것 같아 주제로 선정하게 되었습니다. 기존 MPA 방식에서, React의 강점을 살리기 위해 SPA 방식으로 변형해서 구현하였고, SCSS를 학습하기 위해 SCSS를 이용해 스타일링 하였습니다.",
        thought:
          "문제 해결 》 \n (1) 헤더의 색상이 각 페이지의 배경색에 따라 달라지는 문제 -> Context API & 라이트모드/다크모드 \n (2) gh-pages로 웹페이지 구현시 새로고침하면 에러가 생기는 문제 -> HashRouter \n (3) gif 같은 대용량 이미지 github에 push 안 되는 문제 -> AWS S3",
      },
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "SCSS"],
    image: [
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/home",
        name: "home01.gif",
        tit: "1-1. 메인 페이지 - 버튼 클릭시 특정 컴포넌트로 스크롤해서 이동",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/home",
        name: "home02.gif",
        tit: "1-2. 메인 페이지 - 컴포넌트가 뷰포트 안에 들어오면 아래에서 위로 올라오는 글자와 이미지",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/home",
        name: "home03.gif",
        tit: "1-3. 메인 페이지 - 스크롤 할 때마다 아이콘이 하나씩 등장하는 애니메이션",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/home",
        name: "home04.gif",
        tit: "1-4. 메인 페이지 - 스크롤 할 때마다 이미지가 좌우로 커졌다 작아졌다 하는 애니메이션",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/home",
        name: "home05.gif",
        tit: "1-4. 메인 페이지 - 스크롤 할 때마다 이미지와 글자가 서서히 나타나는 애니메이션",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/team",
        name: "team01.gif",
        tit: "2-1. 회사소개 페이지 - 버튼 클릭시 특정 컴포넌트로 스크롤해서 이동 + 영상 재생 시작",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/team",
        name: "team02.gif",
        tit: "2-2. 회사소개 페이지 - 스크롤 할 때마다 나타났다가 사라지는 배경 이미지",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/team",
        name: "team03.gif",
        tit: "2-3. 회사소개 페이지 - 연도별 히스토리 그래프",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/team",
        name: "team04.gif",
        tit: "2-4. 회사소개 페이지 - 버튼 클릭 시 바뀌는 이미지",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/team",
        name: "team05.gif",
        tit: "2-5. 회사소개 페이지 - 연도별 언론 게시판",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/supportfaq",
        name: "supportfaq01.gif",
        tit: "3-1. 자주 묻는 질문 페이지 - 쿼리스트링을 활용한 FAQ 게시판",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/tosscert",
        name: "tosscert01.gif",
        tit: "4-1. 토스인증서 페이지 - 자동으로 돌아가는 무한 슬라이드",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/career",
        name: "career01.gif",
        tit: "5-1. 채용 페이지 - 배경 화면이 고정된 상태로 스크롤 할 때마다 바뀌는 고정 스크롤 애니메이션",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/career",
        name: "career02.gif",
        tit: "5-2. 채용 페이지 - 마우스 hover시 바뀌는 이미지",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/career",
        name: "career03.gif",
        tit: "5-3. 채용 페이지 - 화면의 100% 너비로 움직이는 슬라이드",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/toss/career",
        name: "career04.gif",
        tit: "5-4. 채용 페이지 - 한 이미지씩 움직이는 슬라이드",
        desc: "",
      },
    ],
  },
  {
    name: "BLIND",
    participant: "3명",
    percent: "50% (프론트엔드 100%)",
    period: "2주",
    project: "portfolio",
    response: "반응형",
    link: "http://54.180.147.144",
    mainImg: "project3/main.png",
    description: [
      {
        introduce:
          "프로젝트 소개: 블라인드 웹사이트를 참고해서 직접 구현한 블라인드 클론 팀 프로젝트입니다. 모든 데이터는 AWS 가상서버의 DB를 이용하였습니다.",
        background:
          "구현 배경: 모든 웹사이트의 가장 기본이라고 할 수 있는 게시판을 공부하기 위해 게시판 중심의 사이트를 주제로 정하였고, 그 중에서도 블라인드는 회사 재직자만 가입 가능하기 때문에 회사에 취업하고 싶은 염원을 담아 블라인드 클론 프로젝트를 선정하였습니다.",
        role: "역할 분담 》 \n Back-End: 데이터베이스 \n Front-End: 전체 레이아웃 디자인(반응형), 폼 유효성 검사, Axios와 RestAPI를 통해 데이터 요청응답 처리 / AWS 서버 구성",
        thought:
          "문제 해결 》 \n (1) 더미 데이터가 아닌 axios 통신을 통해 실제 서버에서 데이터를 주고 받기 위해 서버 구성 -> AWS EC2 \n (2) Redux 새로고침 시 초기화되는 문제 -> Redux-Persist \n",
      },
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Redux-Persist",
      "Styled-component",
      "RestAPI",
      "AWS EC2",
    ],
    image: [
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/blind/mypage",
        name: "login.gif",
        tit: "1-1. 로그인 페이지 \n (1) 포트폴리오 테스트용 ID/PW 제공 \n (2) Redux-Persist 활용해 로그인 여부 저장 -> 로그인 버튼을 마이페이지 아이콘으로 변경",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/blind/mypage",
        name: "join.gif",
        tit: "1-2. 회원가입 페이지",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/blind/post",
        name: "bookmark.gif",
        tit: "2-1. 북마크 기능 \n (1) 북마크 아이콘 클릭시 북마크 추가/해제 -> UI 변경 \n (2) 마이페이지 북마크 메뉴에서 북마크한 게시글 확인 가능 ",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/blind/post",
        name: "like.gif",
        tit: "2-2. 좋아요 기능 \n (1) 좋아요 아이콘 클릭시 좋아요 추가/해제 -> UI 변경 \n (2) 마이페이지에서 좋아요 누른 개수 확인 가능",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/blind/post",
        name: "postWrite.gif",
        tit: "2-2. 좋아요 기능 \n (1) 좋아요 아이콘 클릭시 좋아요 추가/해제 -> UI 변경 \n (2) 마이페이지에서 좋아요 누른 개수 확인 가능",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/blind/post",
        name: "postEdit.gif",
        tit: "2-2. 좋아요 기능 \n (1) 좋아요 아이콘 클릭시 좋아요 추가/해제 -> UI 변경 \n (2) 마이페이지에서 좋아요 누른 개수 확인 가능",
        desc: "",
      },
      {
        url: "https://portfoilo.s3.ap-northeast-2.amazonaws.com/blind/post",
        name: "postDelete.gif",
        tit: "2-2. 좋아요 기능 \n (1) 좋아요 아이콘 클릭시 좋아요 추가/해제 -> UI 변경 \n (2) 마이페이지에서 좋아요 누른 개수 확인 가능",
        desc: "",
      },
      {
        name: "project1/detail1.png",
        tit: "메인 페이지",
        desc: "카테고리별 게시판에 있는 게시글들을 메인에서 토픽 베스트, 카테고리별로 나누어 미리보기 형식으로 몇 개씩 보여줍니다. 게시글 클릭 시 해당 게시글로 이동하고, 카테고리명 우측의 더보기 클릭시 카테고리별 게시판으로 이동합니다.",
      },
      {
        name: "project1/detail1.png",
        tit: "로그인 페이지",
        desc: "가입한 이메일 주소, 비밀번호를 입력하면 실제로 로그인이 가능합니다. 비밀번호 찾기는 익명성 보장을 위해 블라인드 사이트에서도 제공하고 있지 않아 동일하게 경고창으로만 안내됩니다.",
      },
      {
        name: "project1/detail1.png",
        tit: "회원가입 페이지",
        desc: "회원가입은 총 2단계로 진행됩니다 (상단 바에서 진행 단계 표시) \n1. 이메일 인증 단계 \n입력한 이메일 주소로 인증 메일이 발송된 후, 상세 정보 입력창으로 넘어갑니다. (이메일 양식에 맞지 않을 경우 & 이미 가입된 이메일의 경우 알림창을 띄우고, 폼 제출이 불가능합니다) \n2. 상세 정보 입력 단계 \n(1) 인증 번호: 인증 번호 일치 여부 확인 (일치시 메시지와 함께 input창 disabled, 불일치시 메시지 띄우기) \n(2) 이메일: 이전 단계에서 입력한 이메일 자동 입력(수정 불가) \n(3) 회사 이름: \n(4) 닉네임: 10자 이내  \n(5) 비밀번호: 영문, 숫자, 특수문자 포함 8자 이상 \n(6) 비밀번호 확인: 비밀번호 일치 여부 확인\n  ",
      },
      {
        name: "project1/detail1.png",
        tit: "카테고리 페이지",
        desc: "메인 페이지의 카테고리에서 더보기 버튼을 누르면 카테고리 페이지로 이동됩니다. 카테고리별로 다른 게시글을 띄워주며, 최신순, 추천순으로 정렬 가능합니다. 게시글을 누르면 해당 게시글 상세 페이지로 이동됩니다.",
      },
      {
        name: "project1/detail1.png",
        tit: "게시글 상세 페이지",
        desc: "해당 게시글의 카테고리와 제목, 작성자의 회사, 아이디, 작성일, 댓글수, 내용, 추천수, 댓글 등이 표시됩니다. 북마크, 추천 버튼을 누르면 아이콘이 활성화되면서 해당 게시글이 북마크, 추천됩니다(로그인시에만 가능). 해당 게시글의 작성는 게시글을 수정 또는 삭제가 가능합니다. 댓글은 10개씩만 보이기 때문에 나머지 댓글은 더보기 버튼을 통해 볼 수 있습니다(댓글 개수 카운트). 댓글 입력란을 통해 댓글을 작성할 수 있으며 댓글 작성자는 수정과 삭제 또한 가능합니다.",
      },
      {
        name: "project1/detail1.png",
        tit: "글쓰기 페이지",
        desc: "카테고리를 선택 후 제목, 내용을 입력 후 게시글을 작성할 수 있습니다. 작성한 게시글은 해당 카테고리 게시판의 최신순 가장 상단에서 확인할 수 있습니다.",
      },
    ],
  },
  {
    name: "BRANDI",
    participant: "2명",
    percent: "50% (프론트엔드 100%)",
    period: "2주",
    project: "portfolio",
    response: "반응형",
    link: "http://13.209.17.86",
    mainImg: "project1/detail1.png",
    description: [
      {
        introduce:
          "프로젝트 소개: 브랜디라는 쇼핑몰을 참고해서 직접 구현한 클론 팀 프로젝트입니다.",
        role: "역할 분담: 백엔드 담당자는 DB와 서버, 프론트엔드 담당자는 전체 반응형 레이아웃, 폼 유효성 검사, redux로 상태 관리, axios 통신을 활용해 서버 DB를 받아오고 넘겨주는 작업 등을 하였습니다.",
        background:
          "구현 배경: 쇼핑몰 로직과 서버 DB를 활용한 상품 로딩을 공부하기 위해 쇼핑몰을 주제로 선정하였고, 그중 가장 트랜디한 커머스 쇼핑몰인 브랜디를 선택하였습니다. ",
        thought:
          "느낀 점: 무한 재생 슬라이드와 페이징을 처음 구현해보았고, 서버에서 받아오는 상품 리스트, 장바구니 등 쇼핑몰에만 있는 시스템을 공부할 수 있었습니다.",
      },
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "styled-component",
      "Font-awesome",
    ],
    image: [
      {
        name: "project1/detail1.png",
        tit: "메인 페이지",
        desc: "(1) 마지막 이미지에 닿으면 첫 이미지부터 다시 반복되는 무한 슬라이드 \n(2) axios 통신을 통해 서버 DB에서 받아온 메인 상품 리스트 \n(3) 좌우 화살표 아이콘 클릭 시 숫자 페이징",
      },
      {
        name: "project1/detail1.png",
        tit: "카테고리 페이지",
        desc: "(1) 서버 DB에서 상품 리스트를 받아온 후, 카테고리에 따라 페이지 분류",
      },
      {
        name: "project1/detail1.png",
        tit: "상품 소개 페이지",
        desc: "(1) 메인, 카테고리 페이지 등에서 불러왔던 데이터를 그대로 활용해 상품 상세 페이지를 구현 \n(2) 장바구니 클릭시 장바구니에 상품이 추가되면서 상단 헤더 장바구니 아이콘의 숫자가 1 추가되고, 장바구니 페이지로 이동 능 (로그인시에만 추가 가능 / 비로그인시 경고창)",
      },
      {
        name: "project1/detail1.png",
        tit: "헤더",
        desc: "(1) 라우터와 Outlet을 활용한 SPA 방식의 고정 헤더 \n(2) 검색창 \n(3) 로그인시 회원 DB에 따라, 혹은 장바구니 추가할 때마다 바뀌는 장바구니 개수 \n(4) 로그인 유무에 따라 바뀌는 on/off 아이콘 (redux)",
      },
      {
        name: "project1/detail1.png",
        tit: "검색 페이지",
        desc: "(1) 상단 헤더 검색창에 상품명을 입력시 해당 키워드를 가진 모든 상품이 검색 \n(2) 검색 키워드를 다음 페이지에서도 사용하기 위해 redux에 키워드 저장 \n(3) 검색된 상품의 총 개수도 axios로 받아와서 함께 표시",
      },
      {
        name: "project1/detail1.png",
        tit: "마이 페이지",
        desc: "(1) 로그인 유무에 따라 바뀌는 메뉴, 회원정보 수정, 로그아웃 버튼 \n(2) 로그아웃 버튼 클릭시 로그아웃 가능",
      },
      {
        name: "project1/detail1.png",
        tit: "회원정보 수정 페이지",
        desc: "(1) 비밀번호가 일치하면 수정 페이지로 넘어갈 수 있도록 비밀번호 확인 \n(2) 이름, 비밀번호, 휴대폰 번호, 주소 수정 가능",
      },
      {
        name: "project1/detail1.png",
        tit: "로그인 페이지",
        desc: "(1) on/off 아이콘으로 비밀번호 숨기기/보이기 \n(2) 입력창 모두 입력해야 제출 가능 \n(3) 회원 DB와 비교해서 일치하는 정보 있을 경우 로그인, 없을 경우 알림창 띄우며 리턴",
      },
      {
        name: "project1/detail1.png",
        tit: "아이디 찾기 페이지",
        desc: "(1) 전화번호는 10자 이상의 숫자만 입력 가능 \n(2) 회원 DB와 비교해서 일치하는 정보 있을 경우 다음 페이지로 넘어가서 찾은 ID를 표시, 없을 경우 알림창 띄우며 리턴",
      },
      {
        name: "project1/detail1.png",
        tit: "비밀번호 찾기 페이지",
        desc: "(1) 전화번호는 10자 이상의 숫자만 입력 가능 \n(2) 회원 DB와 비교해서 일치하는 정보 있을 경우 비밀번호로 변경 페이지로 이동 (비밀번호는 암호화되어 표시할 수 없으므로 변경만 가능), 없을 경우 알림창 띄우며 리턴",
      },
      {
        name: "project1/detail1.png",
        tit: "회원가입 페이지",
        desc: "(1) 모든 입력창을 채워야 제출 가능 \n(2) 아이디: 영문 또는 숫자 4~20자 \n(3) 아이디 중복 확인: 알림창으로 중복 유무 알림, 중복된 아이디를 입력하거나 중복 확인하지 않고 제출시 리턴 \n(4) 비밀번호: 영문, 숫자, 특수문자 포함 8~20자 \n(5) 비밀번호 확인: 일치 유무 확인 \n(6) 이름: 공백, 특수문자, 숫자가 입력 불가능 \n(7) 전화번호: 숫자 10자 이상만 입력 가능, 하이픈이 입력되지 않도록 자동 삭제 \n(8) 주소 입력",
      },
    ],
  },
];

export default portfolioList;
