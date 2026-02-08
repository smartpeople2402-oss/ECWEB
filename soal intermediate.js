const questionsSource = [
    {
        question: "I ______ my homework when the phone rang.",
        options: ["did", "was doing", "have done", "am doing"],
        answer: 1,
        explanation: "Gunakan 'Past Continuous' (was doing) untuk tindakan yang sedang berlangsung di masa lampau ketika tindakan lain (phone rang) menyela."
    },
    {
        question: "She ______ to London three times this year.",
        options: ["has been", "gone", "was", "is going"],
        answer: 0,
        explanation: "Gunakan 'Present Perfect' (has been) untuk menceritakan pengalaman atau kejadian yang terjadi dalam periode waktu yang belum selesai (this year)."
    },
    {
        question: "If I ______ enough money, I would buy that car.",
        options: ["have", "had", "would have", "having"],
        answer: 1,
        explanation: "Ini adalah 'Conditional Sentence Type 2' (pengandaian masa kini). Polanya adalah: If + Past Simple, would + V1. Jadi jawabannya adalah 'had'."
    },
    {
        question: "The letter ______ by the secretary yesterday morning.",
        options: ["writes", "wrote", "was written", "is written"],
        answer: 2,
        explanation: "Kalimat pasif (Passive Voice) di masa lampau (yesterday). Polanya: Subject + was/were + V3. Jadi, 'was written' adalah jawaban yang benar."
    },
    {
        question: "I look forward to ______ from you soon.",
        options: ["hear", "hearing", "heard", "hears"],
        answer: 1,
        explanation: "Setelah frasa 'look forward to', kita harus menggunakan Gerund (Verb-ing). Jadi, 'hearing' adalah bentuk yang tepat."
    },
    {
        question: "He is the man ______ car was stolen last night.",
        options: ["who", "which", "whose", "whom"],
        answer: 2,
        explanation: "Gunakan 'whose' untuk menunjukkan kepemilikan (possession) dalam Relative Clause. 'Whose car' berarti 'mobil milik pria itu'."
    },
    {
        question: "You ______ smoke in the hospital. It's forbidden.",
        options: ["don't have to", "must not", "should not", "might not"],
        answer: 1,
        explanation: "'Must not' digunakan untuk larangan keras (prohibition). 'Don't have to' berarti tidak perlu (tapi boleh), sedangkan di rumah sakit itu dilarang."
    },
    {
        question: "They have lived in this house ______ 2010.",
        options: ["for", "since", "in", "at"],
        answer: 1,
        explanation: "Gunakan 'since' untuk menunjukkan titik awal waktu (tahun 2010). Gunakan 'for' jika membicarakan durasi (misal: for 10 years)."
    },
    {
        question: "She is ______ intelligent than her brother.",
        options: ["more", "most", "as", "so"],
        answer: 0,
        explanation: "Bentuk komparatif (perbandingan) untuk kata sifat panjang (intelligent) menggunakan 'more'. Polanya: more + adjective + than."
    },
    {
        question: "I wish I ______ how to play the piano.",
        options: ["know", "knew", "knowing", "have known"],
        answer: 1,
        explanation: "Saat menggunakan 'wish' untuk sesuatu yang tidak nyata saat ini, kita memundurkan tenses ke masa lampau (Past Simple). Jadi 'know' menjadi 'knew'."
    },
    {
        question: "Despite ______ late, he finished the test on time.",
        options: ["he was", "being", "of being", "is"],
        answer: 1,
        explanation: "Setelah preposisi 'despite', kita menggunakan Noun Phrase atau Gerund (Verb-ing). Kita tidak bisa langsung menggunakan subjek+verb (he was) tanpa konektor lain."
    },
    {
        question: "Can you tell me where ______?",
        options: ["is the station", "the station is", "the station", "is station"],
        answer: 1,
        explanation: "Ini adalah 'Embedded Question' (pertanyaan di dalam kalimat). Urutan katanya kembali normal: Subject + Verb ('the station is'), bukan dibalik seperti pertanyaan biasa."
    },
    {
        question: "My father stopped ______ two years ago.",
        options: ["to smoke", "smoking", "smoke", "smoked"],
        answer: 1,
        explanation: "'Stop smoking' (berhenti melakukan aktivitas merokok) berbeda dengan 'stop to smoke' (berhenti melakukan sesuatu agar bisa merokok). Konteks ini menyiratkan berhenti total."
    },
    {
        question: "The tea is ______ hot to drink.",
        options: ["very", "too", "enough", "such"],
        answer: 1,
        explanation: "'Too' digunakan untuk menyatakan sesuatu yang berlebihan dan memiliki konotasi negatif (terlalu panas sehingga tidak bisa diminum)."
    },
    {
        question: "I would rather you ______ home now.",
        options: ["go", "went", "gone", "to go"],
        answer: 1,
        explanation: "Struktur 'would rather + someone + past tense' digunakan untuk menyatakan preferensi agar orang lain melakukan sesuatu saat ini/masa depan."
    },
    {
        question: "Neither the teacher nor the students ______ happy with the result.",
        options: ["is", "are", "was", "has"],
        answer: 1,
        explanation: "Dalam struktur 'Neither... nor...', verb mengikuti subjek yang paling dekat (the students). Karena jamak, gunakan 'are'."
    },
    {
        question: "It is important that he ______ the doctor immediately.",
        options: ["see", "sees", "saw", "seeing"],
        answer: 0,
        explanation: "Ini adalah bentuk 'Subjunctive'. Setelah frasa penting/saran (important that), kata kerja kembali ke bentuk dasar (base form) tanpa 's' meskipun subjeknya 'he'."
    },
    {
        question: "We ran out of gas because we ______ to fill the tank.",
        options: ["forget", "forgot", "had forgotten", "have forgotten"],
        answer: 2,
        explanation: "Gunakan 'Past Perfect' (had forgotten) untuk kejadian yang terjadi *sebelum* kejadian masa lampau lainnya (ran out of gas)."
    },
    {
        question: "______ strictly, spiders are not insects.",
        options: ["Speaking", "Speak", "Spoken", "To speak"],
        answer: 0,
        explanation: "'Speaking strictly' adalah participle phrase yang umum digunakan. Ini berfungsi sebagai keterangan cara."
    },
    {
        question: "Unless you ______ harder, you will fail the exam.",
        options: ["study", "don't study", "will study", "studied"],
        answer: 0,
        explanation: "'Unless' berarti 'if... not'. Jadi kalimatnya sudah bermakna negatif, tidak perlu 'don't' lagi. Gunakan Present Simple untuk masa depan dalam klausa pengandaian."
    },
    {
        question: "She made her children ______ their vegetables.",
        options: ["eating", "to eat", "eat", "ate"],
        answer: 2,
        explanation: "Kata kerja kausatif 'make' diikuti oleh objek dan 'bare infinitive' (V1 tanpa to). Pola: make + person + verb."
    },
    {
        question: "I am not used to ______ up so early.",
        options: ["get", "getting", "got", "be getting"],
        answer: 1,
        explanation: "'Be used to' (terbiasa dengan) diikuti oleh Gerund (V-ing). Jangan terkecoh dengan 'used to' (dulu terbiasa) yang diikuti V1."
    },
    {
        question: "By this time next year, I ______ my degree.",
        options: ["will finish", "will have finished", "finish", "am finishing"],
        answer: 1,
        explanation: "Gunakan 'Future Perfect' (will have + V3) untuk menyatakan tindakan yang akan *sudah* selesai pada titik tertentu di masa depan."
    },
    {
        question: "Only when the bus stopped ______ get off.",
        options: ["we did", "did we", "we were", "were we"],
        answer: 1,
        explanation: "Ketika kalimat dimulai dengan 'Only when', terjadi 'inversion' (pembalikan). Polanya seperti kalimat tanya: Auxiliary + Subject + Verb."
    },
    {
        question: "It was ______ a boring movie that I fell asleep.",
        options: ["so", "such", "very", "too"],
        answer: 1,
        explanation: "Gunakan 'such' sebelum Noun Phrase (a boring movie). Gunakan 'so' jika hanya diikuti Adjective (so boring)."
    },
    {
        question: "I'll give you a call as soon as I ______.",
        options: ["arrive", "will arrive", "arrived", "am arriving"],
        answer: 0,
        explanation: "Dalam 'time clause' (seperti as soon as, when), kita menggunakan Present Simple untuk merujuk ke masa depan, bukan 'will'."
    },
    {
        question: "There is ______ milk left in the fridge.",
        options: ["few", "a few", "little", "many"],
        answer: 2,
        explanation: "'Milk' adalah uncountable noun (tidak bisa dihitung). Gunakan 'little' untuk jumlah sedikit. 'Few' hanya untuk benda yang bisa dihitung."
    },
    {
        question: "He asked me if I ______ seen the movie yet.",
        options: ["have", "had", "did", "was"],
        answer: 1,
        explanation: "Dalam 'Reported Speech', tenses mundur satu langkah. 'Have seen' (Present Perfect) berubah menjadi 'Had seen' (Past Perfect)."
    },
    {
        question: "You'd better ______ a doctor before it gets worse.",
        options: ["see", "to see", "seeing", "saw"],
        answer: 0,
        explanation: "'Had better' berfungsi seperti modal verb dan diikuti oleh 'bare infinitive' (V1 tanpa to)."
    },
    {
        question: "Not only ______ the car, but he also crashed it.",
        options: ["he stole", "did he steal", "he did steal", "stole he"],
        answer: 1,
        explanation: "Inversi diperlukan setelah 'Not only' di awal kalimat. Pola: Not only + Auxiliary + Subject + Verb."
    },
    {
        question: "The bridge ______ built right now.",
        options: ["is", "is being", "has been", "was"],
        answer: 1,
        explanation: "Passive Voice dalam Present Continuous. Pola: is/am/are + being + V3. Ini menunjukkan pekerjaan sedang berlangsung."
    },
    {
        question: "I regret ______ you that your application was rejected.",
        options: ["tell", "to tell", "telling", "told"],
        answer: 1,
        explanation: "'Regret to tell' digunakan untuk menyampaikan berita buruk (formal). 'Regret telling' berarti menyesal telah melakukan sesuatu di masa lalu."
    },
    {
        question: "Had I known about the party, I ______ gone.",
        options: ["would have", "would", "will have", "had"],
        answer: 0,
        explanation: "Inversi dari Conditional Type 3 (If I had known...). Bagian utama kalimat membutuhkan 'would have + V3'."
    },
    {
        question: "Everything depends ______ the weather.",
        options: ["of", "in", "on", "at"],
        answer: 2,
        explanation: "Kata kerja 'depend' selalu berpasangan dengan preposisi 'on'."
    },
    {
        question: "He speaks ______ English nor French.",
        options: ["either", "neither", "both", "not"],
        answer: 1,
        explanation: "Pasangan dari 'nor' adalah 'neither'. (Neither... nor... = Tidak keduanya)."
    },
    {
        question: "Please let me ______.",
        options: ["to go", "go", "going", "gone"],
        answer: 1,
        explanation: "Kata 'let' diikuti oleh objek dan 'bare infinitive' (V1 tanpa to). Pola: let + person + verb."
    },
    {
        question: "It's time we ______ home.",
        options: ["go", "went", "have gone", "will go"],
        answer: 1,
        explanation: "Setelah frasa 'It's time', kita menggunakan Past Simple untuk menyatakan bahwa sesuatu seharusnya sudah terjadi sekarang."
    },
    {
        question: "The man ______ I spoke to was very helpful.",
        options: ["who", "whom", "which", "whose"],
        answer: 1,
        explanation: "'Whom' adalah bentuk objek untuk orang (objek dari preposisi 'to'). Meskipun 'who' sering dipakai dalam percakapan informal, 'whom' lebih tepat secara gramatikal di sini."
    },
    {
        question: "Hardly had I arrived ______ the phone rang.",
        options: ["when", "than", "after", "while"],
        answer: 0,
        explanation: "Pasangan dari 'Hardly... had...' adalah 'when'. Ini berarti sesuatu terjadi segera setelah kejadian lain."
    },
    {
        question: "I differ ______ you on this matter.",
        options: ["with", "from", "to", "against"],
        answer: 0,
        explanation: "Kita bisa menggunakan 'differ with' seseorang (tentang pendapat). 'Differ from' biasanya untuk membedakan sifat benda/orang."
    },
    {
        question: "Would you mind ______ the window?",
        options: ["open", "to open", "opening", "opened"],
        answer: 2,
        explanation: "Frasa 'Would you mind' selalu diikuti oleh Gerund (V-ing)."
    },
    {
        question: "She is capable ______ solving the problem.",
        options: ["of", "to", "in", "at"],
        answer: 0,
        explanation: "Kata sifat 'capable' berpasangan dengan preposisi 'of', diikuti V-ing."
    },
    {
        question: "The police ______ investigating the crime.",
        options: ["is", "are", "was", "has"],
        answer: 1,
        explanation: "Kata 'police' selalu dianggap jamak (plural) dalam bahasa Inggris. Jadi gunakan 'are'."
    },
    {
        question: "I prefer tea ______ coffee.",
        options: ["than", "to", "from", "over"],
        answer: 1,
        explanation: "Pola preferensi: prefer A 'to' B. Jangan gunakan 'than' setelah prefer (kecuali dalam 'would rather... than')."
    },
    {
        question: "______ the rain, we went for a walk.",
        options: ["Although", "Despite", "Even though", "However"],
        answer: 1,
        explanation: "'The rain' adalah Noun Phrase. 'Despite' diikuti noun, sedangkan 'Although' harus diikuti kalimat lengkap (subjek + verb)."
    },
    {
        question: "Nobody knows the answer, ______?",
        options: ["do they", "don't they", "does he", "doesn't he"],
        answer: 0,
        explanation: "Question Tag. 'Nobody' bermakna negatif, jadi tag-nya positif. Kata ganti untuk 'nobody/everybody' dalam tag adalah 'they', jadi verb-nya 'do'."
    },
    {
        question: "This is the first time I ______ sushi.",
        options: ["eat", "ate", "have eaten", "eating"],
        answer: 2,
        explanation: "Setelah frasa 'This is the first time', kita wajib menggunakan Present Perfect Tense."
    },
    {
        question: "Try to avoid ______ mistakes.",
        options: ["make", "to make", "making", "made"],
        answer: 2,
        explanation: "Kata kerja 'avoid' selalu diikuti oleh Gerund (V-ing)."
    },
    {
        question: "We should get someone ______ the roof.",
        options: ["fix", "to fix", "fixing", "fixed"],
        answer: 1,
        explanation: "Causative 'get': get + person + 'to' + verb. (Berbeda dengan 'have' + person + verb)."
    },
    {
        question: "If only I ______ taller.",
        options: ["am", "was", "were", "be"],
        answer: 2,
        explanation: "Dalam kalimat pengandaian (subjunctive), 'to be' untuk semua subjek adalah 'were'. 'If only I were...'."
    }
];