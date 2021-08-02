var prodList = [
    { seq: 1, name: '편사', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '16mm', desc2: '40M/45M', isNew: 0, cate: 1 },
    { seq: 2, name: '편사', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '19mm', desc2: '45M', isNew: 0, cate: 1 },
    { seq: 3, name: '편사', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '25mm', desc2: '45M', isNew: 0, cate: 1 },
    { seq: 4, name: '편사', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '32mm', desc2: '', isNew: 0, cate: 1 },
    { seq: 5, name: '편사', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '38mm', desc2: '', isNew: 0, cate: 1 },
    { seq: 6, name: '편사', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '8/10/12mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 7, name: '사계절', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 0, cate: 1 },
    { seq: 8, name: '흑편사', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 0, cate: 1 },
    { seq: 9, name: '흑편사', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '19mm', desc2: '45M', isNew: 0, cate: 1 },
    { seq: 10, name: '흑편사', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '25mm', desc2: '45M', isNew: 0, cate: 1 },
    { seq: 11, name: '청말랭이', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 0, cate: 1 },
    { seq: 12, name: '씽크', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '30.5/38mm', desc2: '30M', isNew: 0, cate: 1 },
    { seq: 13, name: '목장', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 0, cate: 1 },
    { seq: 14, name: '목장', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '19mm', desc2: '30M', isNew: 0, cate: 1 },
    { seq: 15, name: '가든', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '15mm', desc2: '40M', isNew: 0, cate: 1 },
    { seq: 16, name: '나선', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '25/32/38/50/75mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 17, name: '나선', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '100mm', desc2: '30M', isNew: 0, cate: 1 },
    { seq: 18, name: '청고압', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '25/32/38/50/75mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 19, name: '청고압', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '100mm', desc2: '30M', isNew: 0, cate: 1 },
    { seq: 20, name: '식수호스(야성)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '15mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 21, name: '탱글이(우레탄)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 1, cate: 1 },
    { seq: 22, name: '세탁기 급수 호스', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '*', desc2: '2M/3M/5M', isNew: 0, cate: 1 },
    { seq: 23, name: '세차 호스', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '13mm', desc2: '10M/15M/20M', isNew: 0, cate: 1 },
    { seq: 24, name: '에어콘 배수', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '16/19mm', desc2: '30M', isNew: 0, cate: 1 },
    { seq: 25, name: '수평', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '6/8mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 26, name: '수평', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '7/9mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 27, name: '수평', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '8/11mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 28, name: '수평', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '9/12mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 29, name: '수평', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '10/13mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 30, name: '수평', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '12/15mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 31, name: '수평', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '15/18mm', desc2: '45M', isNew: 0, cate: 1 },
    { seq: 32, name: '에어 호스', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '8mm', desc2: '100M', isNew: 0, cate: 1 },
    { seq: 33, name: '에어 호스', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '9.5mm', desc2: '100M', isNew: 0, cate: 1 },
    { seq: 34, name: '에어 호스', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '13mm', desc2: '100M', isNew: 0, cate: 1 },
    { seq: 35, name: '에어 호스', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '16mm', desc2: '100M', isNew: 0, cate: 1 },
    { seq: 36, name: '에어 호스', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '19mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 37, name: '에어 호스', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '25mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 38, name: '투명 고압(주문생산)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '25/32/38/50mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 39, name: '흑나선(주문생산)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '25/32/38/50mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 40, name: '투명 나선(주문생산)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '25/32/38/50mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 41, name: '흑목장(주문생산)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 0, cate: 1 },
    { seq: 42, name: '흑고압(주문생산)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '16/19/25mm', desc2: '40M', isNew: 0, cate: 1 },

    { seq: 1, name: '릴호스(한일)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '20M/30M', desc2: '', isNew: 0, cate: 2 },
    { seq: 2, name: '릴호스(한일)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '50M', desc2: '', isNew: 0, cate: 2 },
    { seq: 3, name: '코일호스(삼정)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '15M/20M', desc2: '', isNew: 1, cate: 2 },
    { seq: 4, name: '매직호스', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '7.5M/15M', desc2: '', isNew: 1, cate: 2 },

    { seq: 1, name: '석유통', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '20리터', desc2: '', isNew: 0, cate: 3 },
    { seq: 2, name: '안전 석유통', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '20리터', desc2: '녹색/백색/적색', isNew: 0, cate: 3 },
    { seq: 3, name: '안전 석유통', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '10리터', desc2: '', isNew: 0, cate: 3 },
    { seq: 4, name: '생수통', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '20리터/10리터', desc2: '', isNew: 0, cate: 3 },
    { seq: 5, name: '물 조루', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '대/중', desc2: '', isNew: 0, cate: 3 },
    { seq: 6, name: '예초기통', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '4리터', desc2: '', isNew: 0, cate: 3 },
    { seq: 7, name: '안전 생수통', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '20리터', desc2: '', isNew: 0, cate: 3 },

    { seq: 1, name: '분사기(삼정)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '알루미늄', desc2: '', isNew: 1, cate: 4 },
    { seq: 2, name: '분사기(천산)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '*', desc2: '', isNew: 0, cate: 4 },
    { seq: 3, name: '분사기(천산)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '아연', desc2: '', isNew: 0, cate: 4 },
    { seq: 4, name: '분사기(천산)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '원터치', desc2: '', isNew: 0, cate: 4 },
    { seq: 5, name: '분사기(삼정)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '대', desc2: '', isNew: 1, cate: 4 },
    { seq: 6, name: '분사기(삼정)', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '소', desc2: '', isNew: 1, cate: 4 },
    { seq: 7, name: '연결구', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '16mm', desc2: '', isNew: 0, cate: 4 },
    { seq: 8, name: '연결구', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '19mm', desc2: '', isNew: 0, cate: 4 },
    { seq: 9, name: '연결구', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '16mm', desc2: 'Y형', isNew: 0, cate: 4 },
    { seq: 10, name: '연결구', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '16mm', desc2: '원터치', isNew: 1, cate: 4 },
    { seq: 11, name: '수도 연결구', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '원터치', desc2: '', isNew: 1, cate: 4 },
    { seq: 12, name: '석유 자바라', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '대/중', desc2: '', isNew: 0, cate: 4 },
    { seq: 13, name: '크린절수기 필터 교체용', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '4P', desc2: '', isNew: 1, cate: 4 },
    { seq: 14, name: '크린절수기 필터 세트', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '*', desc2: '', isNew: 1, cate: 4 },
    { seq: 15, name: '절수형 필터 샤워헤드', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '*', desc2: '', isNew: 1, cate: 4 },
    { seq: 16, name: '절수형 필터 샤워헤드', imgsrc: 'https://i.ibb.co/sbnsCVZ/image.jpg', desc1: '교체용', desc2: '', isNew: 1, cate: 4 },
];