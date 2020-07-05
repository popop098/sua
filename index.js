const discord = require('discord.js');
var client = new discord.Client();



const PREFIX = '!';

client.on("ready", () =>{
    console.log('online!');

    client.user.setActivity('수앗!', { type: 'PLAYING' });
});

client.on ("message", (message) => {

    if(message.author.bot) return;

    if(message.content.startsWith (PREFIX+"안녕")) {
       message.channel.send('안녕하세요><',{files: ["hi.png"]});
    }
    
    if(message.content.startsWith (PREFIX+"수앗")) {
        message.channel.send('수아아아앗!><',{files: ["suaa.png"]});
    }

    if(message.content.startsWith (PREFIX+"남편")) {
        message.channel.send('나의 도련님♡',{files: ["sae.png"]});
    }
    if(message.content.startsWith (PREFIX+"세은이 바보")) {
        message.channel.send('나의 도련님에게 바보라고 하신..건가요?',{files: ["c_중_우귀아사색0_p.png"]});
    }
    if(message.content.startsWith (PREFIX+"바보")) {
        message.channel.send('저에게..바보라고 하신..건가요?',{files: ["c_중_우귀아사색0_p.png"]});
    }

    if(message.content.startsWith (PREFIX+"연아")) {
        message.channel.send('연아는 저와 도련님 사이에서 낳은 제 딸이랍니다!',{files: ["ddal.png"]});
    }
    if(message.content.startsWith (PREFIX+"연화")) {
        message.channel.send('연화는...없는 존재에요..', {files: ["c_중_정수아무룩_p.png"]});
    }
    if(message.content.startsWith (PREFIX+"리제로")) {
        message.channel.send('당사 도련님의 팬픽 많이 봐주세요~', {files: ["c_중_정수아미소_p.png","리제로2기배.png"]});
    }
    if(message.content.startsWith (PREFIX+"분신")) {
        message.channel.send('수아아..분신이 더 좋으시군요..', {files: ["c_중_정귀아무룩_p.png"]});
    }
    if(message.content.startsWith (PREFIX+"가짜소환")) {
        message.channel.send('나와라 분신수아!(펑)', {files: ["c_가_정분신ㅇㅇ_p.png"]});
    }
    if(message.content.startsWith (PREFIX+"비녀")) {
        message.channel.send('비녀가 뽑히는 순간 저는 제가 아니에요..', {files: ["c_11_6_j.jpg"]});
    }
    if(message.content.startsWith (PREFIX+"유화")) {
        message.channel.send('유화는 제가 아끼는 여동생이랍니다!', {files: ["c_가_우분신윙크_p.png"]});
    }
    if(message.content.startsWith (PREFIX+"키스")) {
        message.channel.send('수아앗!갑자기 왜 그러시는거죠?!', {files: ["c_가_우귀아뱅글뱅글_p.png"]});
    }
    if(message.content.startsWith (PREFIX+"다른애들은어디갔어?")) {
        message.channel.send('소녀가 처리 했습니다><', {files: ["c_중_우귀아활짝0_p.png"]});
    }
    if(message.content.startsWith (PREFIX+"유튜브")) {
        message.channel.send('이 곳에 저도 있어요!!, https://www.youtube.com/channel/UCtguQ-MvK92SYZXvvFNxm9Q?view_as=subscriber', {files: ["suaa.png"]});
    }
    if(message.content.startsWith (PREFIX+"아기")) {
        message.channel.send('어머 도련님 대담하셔라', {files: ["c_중_우귀아취함2_p.png"]});
    }

});

client.login(process.env.token);