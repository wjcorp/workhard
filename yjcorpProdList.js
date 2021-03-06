var prodList = [
    { seq: 1, name: '편사', imgsrc: 'https://i.ibb.co/chwmfwG/20210802-134657.jpg', desc1: '16mm', desc2: '40M/45M', isNew: 0, cate: 1 },
    { seq: 2, name: '편사', imgsrc: 'https://i.ibb.co/Y2YFLVT/20210802-135005.jpg', desc1: '19mm', desc2: '45M', isNew: 0, cate: 1 },
    { seq: 3, name: '편사', imgsrc: 'https://i.ibb.co/x7DRD3y/20210802-135036.jpg', desc1: '25mm', desc2: '45M', isNew: 0, cate: 1 },
    { seq: 4, name: '편사', imgsrc: 'https://i.ibb.co/qy92F8s/20210820-130008.jpg', desc1: '32mm', desc2: '', isNew: 0, cate: 1 },
    { seq: 5, name: '편사', imgsrc: 'https://i.ibb.co/6mfkzzw/20210820-130024.jpg', desc1: '38mm', desc2: '', isNew: 0, cate: 1 },
    { seq: 6, name: '편사', imgsrc: 'https://i.ibb.co/3WnNBKK/20210820-130101.jpg', desc1: '8/10/12mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 7, name: '사계절', imgsrc: 'https://i.ibb.co/GMC3KQ3/20210802-134649.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 0, cate: 1 },
    { seq: 8, name: '흑편사', imgsrc: 'https://i.ibb.co/LZf7Kkb/20210802-134929.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 0, cate: 1 },
    { seq: 9, name: '흑편사', imgsrc: 'https://i.ibb.co/nMN25v6/20210802-135021.jpg', desc1: '19mm', desc2: '45M', isNew: 0, cate: 1 },
    { seq: 10, name: '흑편사', imgsrc: 'https://i.ibb.co/fvPy23N/20210802-135049.jpg', desc1: '25mm', desc2: '45M', isNew: 0, cate: 1 },
    { seq: 11, name: '청말랭이', imgsrc: 'https://i.ibb.co/nCLhtjL/20210802-135210.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 0, cate: 1 },
    { seq: 12, name: '씽크', imgsrc: 'https://i.ibb.co/QmY5L7k/20210802-134910.jpg', desc1: '30.5/38mm', desc2: '30M', isNew: 0, cate: 1 },
    { seq: 13, name: '목장', imgsrc: 'https://i.ibb.co/McfyWdw/20210802-134945.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 0, cate: 1 },
    { seq: 14, name: '목장', imgsrc: 'https://i.ibb.co/Yh79CDh/300.jpg', desc1: '19mm', desc2: '30M', isNew: 0, cate: 1 },
    { seq: 15, name: '가든', imgsrc: 'https://i.ibb.co/3fqr69g/20210802-135145.jpg', desc1: '15mm', desc2: '40M', isNew: 0, cate: 1 },
    { seq: 16, name: '나선', imgsrc: 'https://i.ibb.co/nryLFd2/20210802-134854.jpg', desc1: '25/32/38/50/75mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 18, name: '청고압', imgsrc: 'https://i.ibb.co/WHVgkfq/20210820-130208.jpg', desc1: '25/32/38/50/75mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 20, name: '식수호스(야성)', imgsrc: 'https://i.ibb.co/gRkfmMW/20210802-135221.jpg', desc1: '15mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 21, name: '탱글이(우레탄)', imgsrc: 'https://i.ibb.co/mvBVdPn/20210820-125930.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 1, cate: 1 },
    { seq: 22, name: '세탁기 급수 호스', imgsrc: 'https://i.ibb.co/3TS3mmK/20210820-130308.jpg', desc1: '*', desc2: '2M/3M/5M', isNew: 0, cate: 1 },
    { seq: 23, name: '세차 호스', imgsrc: 'https://i.ibb.co/VC6LNp7/20210820-130349.jpg', desc1: '13mm', desc2: '10M/15M/20M', isNew: 0, cate: 1 },
    { seq: 24, name: '에어콘 배수', imgsrc: 'https://i.ibb.co/0JJ76P5/20210802-135153.jpg', desc1: '16/19mm', desc2: '30M', isNew: 0, cate: 1 },
    { seq: 25, name: '수평', imgsrc: 'https://i.ibb.co/7zs03pB/20210820-130427.jpg', desc1: '6/8mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 26, name: '수평', imgsrc: 'https://i.ibb.co/9WbfbCR/20210820-130440.jpg', desc1: '7/9mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 27, name: '수평', imgsrc: 'https://i.ibb.co/2KYmwbz/20210820-130455.jpg', desc1: '8/11mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 28, name: '수평', imgsrc: 'https://i.ibb.co/gg09YTD/20210820-130405.jpg', desc1: '9/12mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 29, name: '수평', imgsrc: 'https://i.ibb.co/xMkS6GD/20210820-130506.jpg', desc1: '10/13mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 30, name: '수평', imgsrc: 'https://i.ibb.co/X4jpdJF/20210820-130527.jpg', desc1: '12/15mm', desc2: '90M', isNew: 0, cate: 1 },
    { seq: 31, name: '수평', imgsrc: 'https://i.ibb.co/9N4Pdr9/20210820-130536.jpg', desc1: '15/18mm', desc2: '45M', isNew: 0, cate: 1 },
    { seq: 32, name: '에어 호스', imgsrc: 'https://i.ibb.co/yR10qmB/20210820-130605.jpg', desc1: '8mm', desc2: '100M', isNew: 0, cate: 1 },
    { seq: 33, name: '에어 호스', imgsrc: 'https://i.ibb.co/Yh79CDh/300.jpg', desc1: '9.5mm', desc2: '100M', isNew: 0, cate: 1 },
    { seq: 34, name: '에어 호스', imgsrc: 'https://i.ibb.co/Yh79CDh/300.jpg', desc1: '13mm', desc2: '100M', isNew: 0, cate: 1 },
    { seq: 35, name: '에어 호스', imgsrc: 'https://i.ibb.co/Yh79CDh/300.jpg', desc1: '16mm', desc2: '100M', isNew: 0, cate: 1 },
    { seq: 36, name: '에어 호스', imgsrc: 'https://i.ibb.co/Yh79CDh/300.jpg', desc1: '19mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 37, name: '에어 호스', imgsrc: 'https://i.ibb.co/Yh79CDh/300.jpg', desc1: '25mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 38, name: '투명 고압(주문생산)', imgsrc: 'https://i.ibb.co/mvHHfdD/20210820-130655.jpg', desc1: '25/32/38/50mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 39, name: '흑나선(주문생산)', imgsrc: 'https://i.ibb.co/GRL7yVR/20210820-130644.jpg', desc1: '25/32/38/50mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 40, name: '투명 나선(주문생산)', imgsrc: 'https://i.ibb.co/rmByHW8/20210820-130636.jpg', desc1: '25/32/38/50mm', desc2: '50M', isNew: 0, cate: 1 },
    { seq: 41, name: '흑목장(주문생산)', imgsrc: 'https://i.ibb.co/Yh79CDh/300.jpg', desc1: '15mm', desc2: '30M/50M', isNew: 0, cate: 1 },
    { seq: 42, name: '흑고압(주문생산)', imgsrc: 'https://i.ibb.co/Yh79CDh/300.jpg', desc1: '16/19/25mm', desc2: '40M', isNew: 0, cate: 1 },

    { seq: 1, name: '릴호스(한일)', imgsrc: 'https://i.ibb.co/vqTY6rh/20210802-134840.jpg', desc1: '20M/30M', desc2: '', isNew: 0, cate: 2 },
    { seq: 2, name: '릴호스(한일)', imgsrc: 'https://i.ibb.co/7nnLjSQ/20210802-134821.jpg', desc1: '50M', desc2: '', isNew: 0, cate: 2 },
    { seq: 3, name: '코일호스(삼정)', imgsrc: 'https://i.ibb.co/0tJV3Xz/20210802-145736.jpg', desc1: '15M/20M', desc2: '', isNew: 1, cate: 2 },
    { seq: 4, name: '매직호스', imgsrc: 'https://i.ibb.co/s2nn5k9/20210802-145713.jpg', desc1: '7.5M/15M', desc2: '', isNew: 1, cate: 2 },

    { seq: 1, name: '석유통', imgsrc: 'https://i.ibb.co/jTFs6dK/20210424-181751.jpg', desc1: '20리터', desc2: '', isNew: 0, cate: 3 },
    { seq: 2, name: '안전 석유통', imgsrc: 'https://i.ibb.co/SBbFtTh/20210802-135639.jpg', desc1: '20리터', desc2: '녹색/백색/적색', isNew: 0, cate: 3 },
    { seq: 3, name: '안전 석유통', imgsrc: 'https://i.ibb.co/BqbmWw6/20210820-130821.jpg', desc1: '10리터', desc2: '', isNew: 0, cate: 3 },
    { seq: 4, name: '생수통', imgsrc: 'https://i.ibb.co/KKcp7mk/20210820-130907.jpg', desc1: '20리터/10리터', desc2: '', isNew: 0, cate: 3 },
    { seq: 5, name: '물 조루', imgsrc: 'https://i.ibb.co/W37sxMy/20210423-205127.jpg', desc1: '대/중', desc2: '', isNew: 0, cate: 3 },
    { seq: 6, name: '예초기통', imgsrc: 'https://i.ibb.co/k8t9zPT/20210820-131022.jpg', desc1: '4리터', desc2: '', isNew: 0, cate: 3 },
    { seq: 7, name: '안전 생수통', imgsrc: 'https://i.ibb.co/D9r5XG4/20210820-130949.jpg', desc1: '20리터', desc2: '', isNew: 0, cate: 3 },

    { seq: 1, name: '분사기(삼정)', imgsrc: 'https://i.ibb.co/LvQJ4Kr/20210820-125700.jpg', desc1: '알루미늄', desc2: '', isNew: 1, cate: 4 },
    { seq: 2, name: '분사기(천산)', imgsrc: 'https://i.ibb.co/555nhDF/20210802-150251.jpg', desc1: '*', desc2: '', isNew: 0, cate: 4 },
    { seq: 3, name: '분사기(천산)', imgsrc: 'https://i.ibb.co/VSGQbxH/20210802-135934.jpg', desc1: '아연', desc2: '', isNew: 0, cate: 4 },
    { seq: 4, name: '분사기(천산)', imgsrc: 'https://i.ibb.co/C66stsF/20210820-131104.jpg', desc1: '원터치', desc2: '', isNew: 0, cate: 4 },
    // { seq: 5, name: '분사기(삼정)', imgsrc: 'https://i.ibb.co/YDr0k1X/20210802-150137.jpg', desc1: '대', desc2: '', isNew: 1, cate: 4 },
    // { seq: 6, name: '분사기(삼정)', imgsrc: 'https://i.ibb.co/j8XxMd7/20210802-150146.jpg', desc1: '소', desc2: '', isNew: 1, cate: 4 },
    { seq: 7, name: '연결구', imgsrc: 'https://i.ibb.co/7CD1Z1H/20210802-150115.jpg', desc1: '16mm', desc2: '', isNew: 0, cate: 4 },
    { seq: 8, name: '연결구', imgsrc: 'https://i.ibb.co/Yh79CDh/300.jpg', desc1: '19mm', desc2: '', isNew: 0, cate: 4 },
    { seq: 9, name: '연결구', imgsrc: 'https://i.ibb.co/xGk3HKb/20210823-125426.jpg', desc1: '16mm', desc2: 'Y형', isNew: 0, cate: 4 },
    { seq: 10, name: '연결구', imgsrc: 'https://i.ibb.co/y8tt7nQ/20210802-150055.jpg', desc1: '16mm', desc2: '원터치', isNew: 1, cate: 4 },
    { seq: 11, name: '수도 연결구', imgsrc: 'https://i.ibb.co/kh6zhCJ/20210802-150048.jpg', desc1: '원터치', desc2: '', isNew: 1, cate: 4 },
    { seq: 12, name: '석유 자바라', imgsrc: 'https://i.ibb.co/S3rYLxf/20210820-131200.jpg', desc1: '대/중', desc2: '', isNew: 0, cate: 4 },
    { seq: 13, name: '크린절수기 필터 세트', imgsrc: 'https://i.ibb.co/f0bBLLf/20210802-150209.jpg', desc1: '*', desc2: '', isNew: 1, cate: 4 },
    { seq: 14, name: '크린절수기 필터', imgsrc: 'https://i.ibb.co/rw5bkF5/20210802-150222.jpg', desc1: '교체용', desc2: '4P', isNew: 1, cate: 4 },
    { seq: 15, name: '절수형 필터 샤워헤드', imgsrc: 'https://i.ibb.co/9pmjbZW/20210802-150310.jpg', desc1: '*', desc2: '', isNew: 1, cate: 4 },
    { seq: 16, name: '절수형 필터 샤워헤드', imgsrc: 'https://i.ibb.co/t4tPZ9s/20210820-125847.jpg', desc1: '교체용', desc2: '', isNew: 1, cate: 4 },
];