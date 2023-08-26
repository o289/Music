// 雛形制作
class MusicPlay{
    constructor(obj){
        // HTML要素の取得
        const id = document.getElementById(obj.id);
        const music = document.getElementById(obj.v);
        const pausing = document.getElementById('pause');
        const stopping = document.getElementById('stop');
        const loop_true = document.getElementById('loop_true');
        const loop_false = document.getElementById('loop_false');
        const submit_loop = document.getElementById('submit_loop');
        const Now = document.getElementById('Now');
        const which1 = document.getElementById('which1');
        const tab = document.getElementById('tab');
        const nav = tab.querySelectorAll('[data-nav]');
        const tabCont = tab.querySelectorAll('[data-tab]');
        const cont = tab.querySelectorAll('[data-cont]');

        // クラス付与
        function add(){
            pausing.classList.add('prepare')
            stopping.classList.add('prepare')
            Now.classList.add('prepare')
            contAdd()
            submit_loop.classList.add('none')
        };
        function remove(){
            pausing.classList.remove('prepare');
            stopping.classList.remove('prepare');
            Now.classList.remove('prepare')
            submit_loop.classList.remove('none')
            contRemove();
            id.classList.remove('prepare');
            id.classList.remove('none');
        }
        function contAdd(){
            let Count = 0
            while(Count < cont.length){
                cont[Count].classList.add('none');
                tabCont[Count].classList.add('none')
                nav[Count].classList.add('none')
                Count++;
            }
        }
        function contRemove(){
            let Count = 0
            while(Count < cont.length){
                cont[Count].classList.remove('none')
                tabCont[Count].classList.remove('none')
                nav[Count].classList.remove('none')
                Count++;
            }
        }

        // 一時停止
        function pause(){
            music.pause();
            pausing.classList.add('none')
        }
        pausing.addEventListener('click', () => {
            pause();
        });
        // 停止
        function stop(){
            pause();
            music.currentTime = 0;
            remove();
        };
        stopping.addEventListener('click', () => {
            stop();
        });
        // loopPlay ON or OFF
        loop_true.addEventListener('click', () => {
            music.loop = true;
            loop_false.classList.remove('none');
            which1.textContent = 'ON'
        });
        loop_false.addEventListener('click', () => {
            music.loop = false;
            loop_false.classList.add('none');
            which1.textContent = 'OFF'
            music.addEventListener('ended', () => {
                pausing.classList.add('none')
            });
        });
        // 初期設定はON
        music.loop = true;
        
        
        // 雛形
        id.addEventListener('click', () => {
            pause();
            add();
            pausing.classList.remove('none');
            music.play();
        });
        
    }
}




















// 音楽を再生するためのデータを取得
const playList = [
    // 応援歌
    new MusicPlay({
        id: 'cheering_song1',
        v: 'cheering1'
    }),
    new MusicPlay({
        id: 'cheering_song2',
        v: 'cheering2'
    }),
    new MusicPlay({
        id: 'cheering_song3',
        v: 'cheering3'
    }),
    new MusicPlay({
        id: 'cheering_song4',
        v: 'cheering4'
    }),
    new MusicPlay({
        id: 'cheering_song5',
        v: 'cheering5'
    }),
    new MusicPlay({
        id: 'cheering_song6',
        v: 'cheering6'
    }),
    new MusicPlay({
        id: 'cheering_song7',
        v: 'cheering7'
    }),
    new MusicPlay({
        id: 'cheering_song8',
        v: 'cheering8'
    }),
    new MusicPlay({
        id: 'cheering_song9',
        v: 'cheering9'
    }),
    new MusicPlay({
        id: 'cheering_song10',
        v: 'cheering10'
    }),
    new MusicPlay({
        id: 'cheering_song11',
        v: 'cheering11'
    }),
    new MusicPlay({
        id: 'cheering_song12',
        v: 'cheering12'
    }),
    new MusicPlay({
        id: 'cheering_song13',
        v: 'cheering13'
    }),
    new MusicPlay({
        id: 'cheering_song14',
        v: 'cheering14'
    }),
    new MusicPlay({
        id: 'cheering_song15',
        v: 'cheering15'
    }),
    new MusicPlay({
        id: 'cheering_song16',
        v: 'cheering16'
    }),
    new MusicPlay({
        id: 'cheering_song17',
        v: 'cheering17'
    }),
    new MusicPlay({
        id: 'cheering_song18',
        v: 'cheering18'
    }),
    new MusicPlay({
        id: 'cheering_song19',
        v: 'cheering19'
    }),
    new MusicPlay({
        id: 'cheering_song20',
        v: 'cheering20'
    }),
    new MusicPlay({
        id: 'cheering_song21',
        v: 'cheering21'
    }),
    new MusicPlay({
        id: 'cheering_song22',
        v: 'cheering22'
    }),
    new MusicPlay({
        id: 'cheering_song23',
        v: 'cheering23'
    }),
    new MusicPlay({
        id: 'cheering_song24',
        v: 'cheering24'
    }),
    new MusicPlay({
        id: 'cheering_song25',
        v: 'cheering25'
    }),
    new MusicPlay({
        id: 'cheering_song26',
        v: 'cheering26'
    }),
    new MusicPlay({
        id: 'cheering_song27',
        v: 'cheering27'
    }),
    new MusicPlay({
        id: 'cheering_song28',
        v: 'cheering28'
    }),
    new MusicPlay({
        id: 'cheering_song29',
        v: 'cheering29'
    }),
    new MusicPlay({
        id: 'cheering_song30',
        v: 'cheering30'
    }),
    new MusicPlay({
        id: 'cheering_song31',
        v: 'cheering31'
    }),
    new MusicPlay({
        id: 'cheering_song32',
        v: 'cheering32'
    }),
    new MusicPlay({
        id: 'cheering_song33',
        v: 'cheering33'
    }),
    new MusicPlay({
        id: 'cheering_song34',
        v: 'cheering34'
    }),
    new MusicPlay({
        id: 'cheering_song35',
        v: 'cheering35'
    }),
    new MusicPlay({
        id: 'cheering_song36',
        v: 'cheering36'
    }),
    new MusicPlay({
        id: 'cheering_song37',
        v: 'cheering37'
    }),
    new MusicPlay({
        id: 'cheering_song38',
        v: 'cheering38'
    }),
    new MusicPlay({
        id: 'cheering_song39',
        v: 'cheering39'
    }),
    new MusicPlay({
        id: 'cheering_song40',
        v: 'cheering40'
    }),
    new MusicPlay({
        id: 'cheering_song41',
        v: 'cheering41'
    }),
    new MusicPlay({
        id: 'cheering_song42',
        v: 'cheering42'
    }),
    new MusicPlay({
        id: 'cheering_song43',
        v: 'cheering43'
    }),
    new MusicPlay({
        id: 'cheering_song44',
        v: 'cheering44'
    }),
    new MusicPlay({
        id: 'cheering_song45',
        v: 'cheering45'
    }),
    new MusicPlay({
        id: 'cheering_song46',
        v: 'cheering46'
    }),
    new MusicPlay({
        id: 'cheering_song47',
        v: 'cheering47'
    }),
    new MusicPlay({
        id: 'cheering_song48',
        v: 'cheering48'
    }),
    new MusicPlay({
        id: 'cheering_song49',
        v: 'cheering49'
    }),
    new MusicPlay({
        id: 'cheering_song50',
        v: 'cheering50'
    }),
    new MusicPlay({
        id: 'cheering_song51',
        v: 'cheering51'
    }),
    new MusicPlay({
        id: 'cheering_song52',
        v: 'cheering52'
    }),
    new MusicPlay({
        id: 'cheering_song53',
        v: 'cheering53'
    }),
    new MusicPlay({
        id: 'cheering_song54',
        v: 'cheering54'
    }),
    new MusicPlay({
        id: 'cheering_song55',
        v: 'cheering55'
    }),
    new MusicPlay({
        id: 'cheering_song56',
        v: 'cheering56'
    }),
    new MusicPlay({
        id: 'cheering_song57',
        v: 'cheering57'
    }),
    new MusicPlay({
        id: 'cheering_song58',
        v: 'cheering58'
    }),
    new MusicPlay({
        id: 'cheering_song59',
        v: 'cheering59'
    }),
    new MusicPlay({
        id: 'cheering_song60',
        v: 'cheering60'
    }),
    new MusicPlay({
        id: 'cheering_song61',
        v: 'cheering61'
    }),
    // ゲームBGM
    new MusicPlay({
        id: 'bgm1',
        v: 'BGM1',
    }),
    new MusicPlay({
        id: 'bgm2',
        v: 'BGM2'
    }),
    new MusicPlay({
        id: 'bgm3',
        v: 'BGM3'
    }),
    new MusicPlay({
        id: 'bgm4',
        v: 'BGM4'
    }),
    new MusicPlay({
        id: 'bgm5',
        v: 'BGM5'
    }),
    new MusicPlay({
        id: 'bgm6',
        v: 'BGM6'
    }),
    new MusicPlay({
        id: 'bgm7',
        v: 'BGM7'
    }),
    new MusicPlay({
        id: 'bgm8',
        v: 'BGM8'
    }),
    new MusicPlay({
        id: 'bgm9',
        v: 'BGM9'
    }),
    new MusicPlay({
        id: 'bgm10',
        v: 'BGM10'
    }),
    new MusicPlay({
        id: 'bgm11',
        v: 'BGM11'
    }),
    new MusicPlay({
        id: 'bgm12',
        v: 'BGM12'
    }),
    new MusicPlay({
        id: 'bgm13',
        v: 'BGM13'
    }),
    new MusicPlay({
        id: 'bgm14',
        v: 'BGM14'
    }),
    // 曲
    new MusicPlay({
        id: 'other1',
        v: 'artist1'
    }),
    new MusicPlay({
        id: 'other2',
        v: 'artist2'
    }),
    new MusicPlay({
        id: 'other3',
        v: 'artist3'
    }),
    new MusicPlay({
        id: 'other4',
        v: 'artist4'
    }),
    new MusicPlay({
        id: 'other5',
        v: 'artist5'
    }),
    new MusicPlay({
        id: 'other6',
        v: 'artist6'
    }),
    new MusicPlay({
        id: 'other7',
        v: 'artist7'
    }),
    new MusicPlay({
        id: 'other8',
        v: 'artist8'
    }),
    new MusicPlay({
        id: 'other9',
        v: 'artist9'
    }),
    new MusicPlay({
        id: 'other10',
        v: 'artist10'
    }),
    new MusicPlay({
        id: 'other11',
        v: 'artist11'
    }),
    new MusicPlay({
        id: 'other12',
        v: 'artist12'
    }),
    new MusicPlay({
        id: 'other13',
        v: 'artist13'
    }),
    new MusicPlay({
        id: 'other14',
        v: 'artist14'
    }),
];
