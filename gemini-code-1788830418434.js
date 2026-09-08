// 1. 장르별 음악 데이터 정의 (유튜브 비디오 ID)
const musicData = {
    kpop: [
        { title: "Hype Boy", artist: "NewJeans", youtubeId: "11cta61Wi0g" },
        { title: "사건의 지평선", artist: "윤하", youtubeId: "BBdC1A1kHFw" }
    ],
    pop: [
        { title: "Off My Face", artist: "Justin Bieber", youtubeId: "kLp_Hh6DKWc" },
        { title: "As It Was", artist: "Harry Styles", youtubeId: "H5v3kku4y6Q" }
    ],
    chill: [
        { title: "비가 오고 그래서", artist: "헤이즈 (Heize)", youtubeId: "afxLaQiLu-o" },
        { title: "Lofi Hip Hop Radio", artist: "Lofi Girl", youtubeId: "jfKfPfyJRdk" }
    ],
    funk: [
        { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", youtubeId: "OPf0YbXqDm0" },
        { title: "Leave The Door Open", artist: "Silk Sonic", youtubeId: "adLGHcj_3JE" }
    ]
};

// DOM 요소 가져오기
const mainGenreBtn = document.getElementById('mainGenreBtn');
const subButtons = document.getElementById('subButtons');
const genreButtons = document.querySelectorAll('.genre-btn');
const songListContainer = document.getElementById('songList');

// 2. [장르] 버튼 클릭 시 하위 메뉴 토글 이벤트
mainGenreBtn.addEventListener('click', () => {
    subButtons.classList.toggle('open');
});

// 3. 하위 장르 버튼 클릭 이벤트 처리
genreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // 선택된 버튼 스타일 적용
        genreButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // 선택한 장르 데이터 가져오기
        const selectedGenre = e.target.getAttribute('data-genre');
        renderSongs(selectedGenre);
    });
});

// 4. 노래 카드를 화면에 출력하는 함수 (자동 재생 포함)
function renderSongs(genre) {
    songListContainer.innerHTML = ''; // 화면 초기화

    const songs = musicData[genre];

    if (songs && songs.length > 0) {
        songs.forEach(song => {
            const card = document.createElement('div');
            card.className = 'song-card';

            // autoplay=1 설정을 추가하여 클릭 즉시 재생되도록 함
            card.innerHTML = `
                <div class="song-info">
                    <div class="song-title">${song.title}</div>
                    <div class="song-artist">${song.artist}</div>
                </div>
                <div class="player-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1" 
                        title="${song.title}" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            `;
            songListContainer.appendChild(card);
        });
    }
}