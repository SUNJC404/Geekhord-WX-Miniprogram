// pages/exam/exam.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: app.globalData.windowHeight,
    windowWidth: app.globalData.windowWidth,
    count: 0,
    ind: 0,
    started: false,
    submitted: false,
    typed: 0,
    isCorrect: false,
    selectedA: null,
    selectedB: null,
    results: [],
    randomResults: ['CMaj', 'Cmin', 'Cdim', 'Caug', 'C#Maj', 'C#min', 'C#dim', 'C#aug', 'DMaj', 'Dmin', 'Ddim', 'Daug', 'D#Maj', 'D#min', 'D#dim', 'D#aug', 'EMaj', 'Emin', 'Edim', 'Eaug', 'FMaj', 'Fmin','Fdim', 'Faug', 'GMaj', 'Gmin','Gdim', 'Gaug','G#Maj', 'G#min','G#dim', 'G#aug', 'AMaj', 'Amin', 'Adim', 'Aaug', 'A#Maj', 'A#min', 'A#dim', 'A#aug', 'BMaj', 'Bmin', 'Bdim', 'Baug'],
    randomQuestion: '点击右侧开始',
    wrong: [],
    Correct: [],
    itemColor: [],
    chordList: [
      {
        Chord: 'CMaj',
        ans: ['C','E','G'],
      },
      {
        Chord: 'Cmin',
        ans: ['C','Eb','G']
      },
      {
        Chord: 'Cdim',
        ans: ['C','Eb','Gb']
      },
      {
        Chord: 'Caug',
        ans: ['C','E','G#']
      },
      {
        Chord: 'C#Maj',
        ans: ['C#','E#','G#'],
      },
      {
        Chord: 'C#min',
        ans: ['C#','E','G#']
      },
      {
        Chord: 'C#dim',
        ans: ['C#','E','G']
      },
      {
        Chord: 'C#aug',
        ans: ['C#','E#','Gx']
      },
      {
        Chord: 'DMaj',
        ans: ['D','F#','A']
      },
      {
        Chord: 'Dmin',
        ans: ['D','F','A']
      },
      {
        Chord: 'Ddim',
        ans: ['D','F','Ab']
      },
      {
        Chord: 'Daug',
        ans: ['D','F#','A#']
      },
      {
        Chord: 'D#Maj',
        ans: ['D#','Fx','A#']
      },
      {
        Chord: 'D#min',
        ans: ['D#','F#','A#']
      },
      {
        Chord: 'D#dim',
        ans: ['D#','F#','A']
      },
      {
        Chord: 'D#aug',
        ans: ['D#','Fx','Ax']
      },
      {
        Chord: 'EMaj',
        ans: ['E','G#','B']
      },
      {
        Chord: 'Emin',
        ans: ['E','G','B']
      },
      {
        Chord: 'Edim',
        ans: ['E','G','Bb']
      },
      {
        Chord: 'Eaug',
        ans: ['E','G#','B#']
      },
      {
        Chord: 'FMaj',
        ans: ['F','A','C']
      },
      {
        Chord: 'Fmin',
        ans: ['F','Ab','C']
      },
      {
        Chord: 'Fdim',
        ans: ['F','Ab','Cb']
      },
      {
        Chord: 'Faug',
        ans: ['F','A','C#']
      },
      {
        Chord: 'F#Maj',
        ans: ['F#','A#','C#']
      },
      {
        Chord: 'F#min',
        ans: ['F#','A','C#']
      },
      {
        Chord: 'F#dim',
        ans: ['F#','A','C']
      },
      {
        Chord: 'F#aug',
        ans: ['F#','A#','Cx']
      },
      {
        Chord: 'GMaj',
        ans: ['G','B','D']
      },
      {
        Chord: 'Gmin',
        ans: ['G','Bb','D']
      },
      {
        Chord: 'Gdim',
        ans: ['G','Bb','Db']
      },
      {
        Chord: 'Gaug',
        ans: ['G','B','D#']
      },
      {
        Chord: 'G#Maj',
        ans: ['G#','B#','D#']
      },
      {
        Chord: 'G#min',
        ans: ['G#','B','D#']
      },
      {
        Chord: 'G#dim',
        ans: ['G#','B','D']
      },
      {
        Chord: 'G#aug',
        ans: ['G#','B#','Dx']
      },
      {
        Chord: 'AMaj',
        ans: ['A','C#','E']
      },
      {
        Chord: 'Amin',
        ans: ['A','C','E']
      },
      {
        Chord: 'Adim',
        ans: ['A','C','Eb']
      },
      {
        Chord: 'Aaug',
        ans: ['A','C#','E#']
      },
      {
        Chord: 'A#Maj',
        ans: ['A#','Cx','E#']
      },
      {
        Chord: 'A#min',
        ans: ['A#','C#','E#']
      },
      {
        Chord: 'A#dim',
        ans: ['A#','C#','E']
      },
      {
        Chord: 'A#aug',
        ans: ['A#','Cx','Ex']
      },
      {
        Chord: 'BMaj',
        ans: ['B','D#','F#']
      },
      {
        Chord: 'Bmin',
        ans: ['B','D','F#']
      },
      {
        Chord: 'Bdim',
        ans: ['B','D','F']
      },
      {
        Chord: 'Baug',
        ans: ['B','D#','Fx']
      },
    ]
  },
  checkColor() {
    const colors = [];
    const Results = this.data.results;
    for (let i = 0; i < Results.length; i++) {
      const item = Results[i]
      if (!this.data.submitted) {
        colors.push('lightgray')
      } else if (this.data.Correct.includes(item)) {
        colors.push('#1ab37f')
      } else if (this.data.wrong.includes(item)) {
        colors.push('#FB4C46')
      } else {
        colors.push('lightgray')
      }
    }
    this.setData({
      submitted: true,
      itemColor: colors,
    })
  },  
  getRandomQuestions() {
    this.setData({
      typed: 0,
      itemColor: [],
      wrong: [],
      Correct: [],
      results: [],
      selectedA: null,
      selectedB: null,
      submitted: false,
      isCorrect: false,
    });
    const ind = Math.floor(Math.random() * this.data.chordList.length);
    this.data.index = ind;
    this.setData({
      ind: this.data.ind,
    })
    const randomQuestion = this.data.chordList[ind].Chord
    this.setData({
      randomQuestion
    });
  },

  onSubmit() {
    if(this.data.typed <= 8 && !this.data.isCorrect){
      let i = 0;
      const wrong = [];
      const Correct = [];
      const len = this.data.results.length;
      const chordAns = this.data.chordList[this.data.index].ans;
      const Results = this.data.results;
      for (i = 0; i < len; i++) {
        if(!chordAns.includes(Results[i])) {
          wrong.push(Results[i])
        } else {
          Correct.push(Results[i])
        }
      }
      const isCorrect = Results.slice().sort().join() == chordAns.slice().sort().join()
      const twrong = [...new Set(wrong.concat(this.data.wrong))];
      const tCorrect = [...new Set(Correct.concat(this.data.Correct))];
      this.setData({
        wrong: twrong,
        Correct: tCorrect,
        isCorrect: isCorrect,
        submitted: true,
      });
      this.checkColor();
      if(this.data.isCorrect) {
        this.setData({
          count: this.data.count + 1,
        })
      }
    }
  },

  onSelectA(event) {
    this.setData({
      selectedA: event.target.dataset.value
    })
  },

  onSelectB(event) {
    this.setData({
      selectedB: event.target.dataset.value
    })
  },

  onConfirm() {
    let resultText;
    const ty = this.data.typed;
    if (this.data.selectedB && ty < 8 && !this.data.isCorrect ) {
      if (this.data.selectedA === 'A1' && this.data.selectedB === 'B1') {
        resultText = 'C#';
      } else if (this.data.selectedA === 'A1' && this.data.selectedB === 'B2') {
        resultText = 'D#';
      } else if (this.data.selectedA === 'A1' && this.data.selectedB === 'B3') {
        resultText = 'E#';
      } else if (this.data.selectedA === 'A1' && this.data.selectedB === 'B4') {
        resultText = 'F#';
      } else if (this.data.selectedA === 'A1' && this.data.selectedB === 'B5') {
        resultText = 'G#';
      } else if (this.data.selectedA === 'A1' && this.data.selectedB === 'B6') {
        resultText = 'A#';
      } else if (this.data.selectedA === 'A1' && this.data.selectedB === 'B7') {
        resultText = 'B#';
      } else if (this.data.selectedA === 'A2' && this.data.selectedB === 'B1') {
        resultText = 'Cb';
      } else if (this.data.selectedA === 'A2' && this.data.selectedB === 'B2') {
        resultText = 'Db';
      } else if (this.data.selectedA === 'A2' && this.data.selectedB === 'B3') {
        resultText = 'Eb';
      } else if (this.data.selectedA === 'A2' && this.data.selectedB === 'B4') {
        resultText = 'Fb';
      } else if (this.data.selectedA === 'A2' && this.data.selectedB === 'B5') {
        resultText = 'Gb';
      } else if (this.data.selectedA === 'A2' && this.data.selectedB === 'B6') {
        resultText = 'Ab';
      } else if (this.data.selectedA === 'A2' && this.data.selectedB === 'B7') {
        resultText = 'Bb';
      } else if (this.data.selectedA === 'A3' && this.data.selectedB === 'B1') {
        resultText = 'Cx';
      } else if (this.data.selectedA === 'A3' && this.data.selectedB === 'B2') {
        resultText = 'Dx';
      } else if (this.data.selectedA === 'A3' && this.data.selectedB === 'B3') {
        resultText = 'Ex';
      } else if (this.data.selectedA === 'A3' && this.data.selectedB === 'B4') {
        resultText = 'Fx';
      } else if (this.data.selectedA === 'A3' && this.data.selectedB === 'B5') {
        resultText = 'Gx';
      } else if (this.data.selectedA === 'A3' && this.data.selectedB === 'B6') {
        resultText = 'Ax';
      } else if (this.data.selectedA === 'A3' && this.data.selectedB === 'B7') {
        resultText = 'Bx';
      } else if (this.data.selectedA === 'A4' && this.data.selectedB === 'B1') {
        resultText = 'Cbb';
      } else if (this.data.selectedA === 'A4' && this.data.selectedB === 'B2') {
        resultText = 'Dbb';
      } else if (this.data.selectedA === 'A4' && this.data.selectedB === 'B3') {
        resultText = 'Ebb';
      } else if (this.data.selectedA === 'A4' && this.data.selectedB === 'B4') {
        resultText = 'Fbb';
      } else if (this.data.selectedA === 'A4' && this.data.selectedB === 'B5') {
        resultText = 'Gbb';
      } else if (this.data.selectedA === 'A4' && this.data.selectedB === 'B6') {
        resultText = 'Abb';
      } else if (this.data.selectedA === 'A4' && this.data.selectedB === 'B7') {
        resultText = 'Bbb';
      } else if (this.data.selectedA == null && this.data.selectedB === 'B1') {
        resultText = 'C';
      } else if (this.data.selectedA == null && this.data.selectedB === 'B2') {
        resultText = 'D';
      } else if (this.data.selectedA == null && this.data.selectedB === 'B3') {
        resultText = 'E';
      } else if (this.data.selectedA == null && this.data.selectedB === 'B4') {
        resultText = 'F';
      } else if (this.data.selectedA == null && this.data.selectedB === 'B5') {
        resultText = 'G';
      } else if (this.data.selectedA == null && this.data.selectedB === 'B6') {
        resultText = 'A';
      } else if (this.data.selectedA == null && this.data.selectedB === 'B7') {
        resultText = 'B';
      } 
      const pushResults = this.data.results;
      console.log("Before Confirm",pushResults);
      pushResults.push(resultText)
      this.setData({
        results: pushResults,
        typed: this.data.typed + 1,
     });
     this.checkColor();
      this.setData({
        selectedA: null,
        selectedB: null 
      });
      console.log("After Confirm",pushResults);
    }
  },
  onDeleteResult() {
    if(this.data.selectedA != null || this.data.selectedB != null) {
      this.setData({
        selectedA: null,
        selectedB: null 
      });
    } else if(!this.data.isCorrect) {
      const pushResults = this.data.results;
      pushResults.pop();
      const pushColor = this.data.itemColor;
      pushColor.pop();
      this.setData({
        typed: this.data.typed - 1,
        results: pushResults,
        itemColor: pushColor,
      });
      this.checkColor();
      this.setData({
        selectedA: null,
        selectedB: null 
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const height = this.data.windowHeight/(this.data.windowWidth/750)-922;
    this.setData({
      height: height,
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})