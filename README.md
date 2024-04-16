## **참고!**
원본:
https://github.com/gdl-blue/imitated-seed-2
## 개요
더시드 엔진 (구 프론트엔드 기준) 모방 프로젝트.  
< "엔진 내부 UI는 상관없음." ( https://feedback.theseed.io/posts/280 ) >  

[onamu-theseed](https://github.com/gdl-blue/onamu-theseed)의 후속이다.

이 엔진이 정상 작동하는 것으로 확인된 Node.js 버전은 8.6.0, 12.16.2, 12.18.1, 16.6.2이다. 만약 혹시나 Windows XP/Vista에서 실행이 필요한 경우 [이것](https://github.com/hlizard/node8-xp/raw/v8.6.0-xp/Release/Release.zip)을 사용할 것.

테스트 서버:
- [내 서버](https://go2021.glitch.me) - the seed 4.11.2
- ~~[test님의 서버](https://seore.org) - the seed 4.20.0, Nuxt.js로 포팅됨~~
- [테스트위키](https://testwiki.kr) - the seed 4.22.9

나무픽스와 거의 호환된다.

Pull Request 시 서버 코드에는 `?.`, `??`, `import` 등의 신문법, 프론트엔드 자바스크립트에는 ES6 이상 문법을 사용하지 말 것.

파서 함수 이름이 마크다운인 이유는 개발 초기에는 마크다운을 사용했기 때문이다.

## 기초 사용 방법
- **만약 config.json에서 `use_external_js`과 `use_external_css`이 true이면 아래 단계는 생략해도 된다.** 스킨만 추가하면 된다.
  - css, js 디렉토리를 만든다.
    - https://theseed.io/js/theseed.js, https://theseed.io/js/jquery-2.1.4.min.js, https://theseed.io/js/jquery-1.11.3.min.js, https://theseed.io/js/intersection-observer.js, https://theseed.io/js/dateformatter.js )를 각각 다운로드받아 js 디렉토리에 복사한다.
    - https://theseed.io/css/wiki.css, https://theseed.io/css/katex.min.css, https://theseed.io/css/diffview.css )를 각각 다운로드받아 css 디렉토리에 복사한다.
- skins 디렉토리를 만든다.
  - [buma](https://github.com/LiteHell/theseed-skin-buma/tree/d77eef50a77007da391c5082b4b94818db372417), [liberty](https://github.com/namuwiki/theseed-skin-liberty/tree/153cf78f70206643ec42e856aff8280dc21eb2c0) 등 원하는 스킨을 내려받고 skins 디렉토리에 스킨 이름으로 하위디렉토리를 만들어 복사한다.
- `npm i`를 실행한다.
- `node server`를 실행한다.

## 이메일 설정법 [Gmail]
- 먼저 "자신사이트주소/admin/config" 에 접속해 `사이트 주소`란에 자신의 사이트주소를 입력한다.
- config.json 파일을 열고 `"disable_email":"true"`를 제거한다.
- `"mailhost":"smtp.gmail.com","email":"인증메일을 보낼 Gmail 주소","passwd":"구글 앱 비밀번호"`를 추가한다.
- [[구글 앱 비밀번호 설정링크]](https://myaccount.google.com/apppasswords)
- 타사메일의 경우 smtp.gmail.com을 타사메일의 smtp주소로 변경해야함.

## 추가 도구
- backlink-reset.js: 역링크 초기화
- undelete-thread.js: 삭제된 토론 복구
- namuwiki-importer.js: 나무위키 데이타베이스 덤프 가져오기

## config.json
- config.json 수정으로 숨겨진 설정을 제어할 수 있다.
  - `disable_email`: (기본값 false) 전자우편 인증을 끈다.
  - `disable_login_history`: (기본값 false) 로그인 내역을 기록하지 않게 한다.
  - `use_external_js`: (기본값 false) theseed.js, jQuery 등을 [theseed.io](https://theseed.io)에서 불러온다.
  - `use_external_css`: (기본값 false) wiki.css 등을 [theseed.io](https://theseed.io)에서 불러온다.
  - `allow_account_deletion`: (기본값 false) 계정 탈퇴를 허용한다.
  - `allow_account_rename`: (기본값 false) 닉네임 변경을 허용한다.
  - `search_host`: (기본값 "127.5.5.5") 검색 서버 호스트 주소
  - `search_port`: (기본값 25005) 검색 서버 포트
  - `search_autostart`: (기본값 false) 같은 디렉토리에 검색 서버 프로그램(search.js)이 있을 경우 위키 서버 시작 시 검색 서버를 같이 시작시킨다.
  - `no_username_format`: (기본값 false) 한글, 공백 등의 특수문자를 사용자 이름으로 쓸 수 있게 하고 길이 제한을 없앤다.
  - `owners`: (기본값 \[\]) /admin/config에 접속할 수 있는 사용자 이름 배열
  - `reserved_usernames`: (기본값 \["namubot"\]) 이 배열 안에 있는 닉네임으로 계정을 만들 수 없다.
  - `theseed_version`: (기본값 "4.12.0") [the seed 판올림 기록](https://namu.wiki/w/the%20seed/%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8#toc)을 참고하여, 모방할 the seed 엔진의 버전을 지정한다(형식 주의! 4.4(X), "4.4"(X), 4.4.1(X), "4.4.1"(O) 문자열 x.y.z 형식으로). 예를 들어, "4.4.2"로 할 경우, v4.4.3에 추가된 쓰레드 주제/문서 변경 기능을 사용할 수 없고, "4.18.0"으로 할 경우 IPACL과 사용자 차단 기능이 비활성화되고 ACLGroup가 활성화되며 ACL에서 이름공간ACL 실행 action를 사용할 수 있다.
  - `replicate_theseed_license`: (기본값 false) 라이선스 페이지를 더시드 엔진처럼 띄운다. 가급적이면 쓰지 않는 것을 권장한다.
  - `namuwiki_exclusive`: (기본값 false) 나무위키 전용 기능(경고 ACL 그룹, 문서 이전 판 경고 등)을 활성화한다.
  - `enable_captcha`: (기본값 false) 보안문자를 쓰게 한다.
  - `block_ip`: (기본값 []) 접속을 차단할 IP를 지정한다. CIDR는 지원하지 않는다.
  - `protect_owner`: (기본값 false) 소유자 보호 기능을 활성화한다.
  - `disable_multithreading`: (기본값 true) 멀티쓰레딩을 비활성화한다.
  - `custom_namespaces`: (기본값 []) 사용자 지정 이름공간 배열
  - `sessionhttp`: (기본값 false) true로 설정시, https접속시에만 로그인이 유지된다.
  - `mailhost`: (기본값 []) 이메일 호스트 설정.
  - `email`: (기본값 []) 이메일 주소.
  - `passwd`: (기본값 []) 이메일 주소의 비밀번호(gmail의 경우 앱 비밀번호).
  - `disable_file_server`: (기본값 false) 별도 파일 서버 없이도 파일 업로드가 가능하게 한다.
  - `max_file_size`: (기본값 2000000) 최대 파일 크기 (바이트 단위)

## 라이선스
자유롭게 쓰기 바란다.

## 더 시드와 다른 것들
- 엔진에서 백엔드와 프론트엔드를 모두 처리한다. (오픈나무에서 영향 받음)
- 밀리초 유닉스 시간을 사용한다.
- /notify/thread 라우트가 제대로 되어있지 않다.

