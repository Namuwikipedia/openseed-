<!DOCTYPE html>
<html>
<head>
    <title>위키 게시판</title>
    <style>
        .post {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>게시판</h1>
    <div id="latest-posts">
        <h2>최신 게시물</h2>
        <ul id="posts-list"></ul>
    </div>
    <div id="qa">
        <h2>질문과 답변</h2>
        <ul id="qa-list"></ul>
    </div>

    <script>
        // 최신 게시물 데이터
        const latestPosts = [
            { title: '첫 번째 게시물', link: 'link-to-post-1' },
            { title: '두 번째 게시물', link: 'link-to-post-2' },
            { title: '세 번째 게시물', link: 'link-to-post-3' }
        ];

        // 질문과 답변 데이터
        const qaData = [
            { question: '질문 1', answer: '답변 1' },
            { question: '질문 2', answer: '답변 2' }
        ];

        // 최신 게시물 렌더링
        const postsList = document.getElementById('posts-list');
        latestPosts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${post.link}">${post.title}</a>`;
            postsList.appendChild(listItem);
        });

        // 질문과 답변 렌더링
        const qaList = document.getElementById('qa-list');
        qaData.forEach(qa => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${qa.question}</strong>: ${qa.answer}`;
            qaList.appendChild(listItem);
        });
    </script>
</body>
</html>
return res.send(await render(req, '게시판', content, {}, _, _, 'board'));
