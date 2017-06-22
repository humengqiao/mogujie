(function(){
	/*头部搜索框控制开始*/
		var search=document.getElementsByClassName('form-wrapper')[0].getElementsByTagName('input')[0];
		if(window.addEventListener){
			search.addEventListener('focus',function(e){
				var data_value=search.getAttribute('data-value');
				if(search.value===data_value){
					search.value='';
				}
			});
			search.addEventListener('blur',function(e){
				var value=search.value;
				var data_value=search.getAttribute('data-value');
				if(!value.replace(/^\s*((.|\n)*\S)?\s*$/,'$1')){
					search.value=data_value;
				}
			});
		}else if(window.attachEvent){
			search.attachEvent('onfocus',function(e){
				var data_value=search.getAttribute('data-value');
				if(search.value===data_value){
					search.value='';
				}
			});
			search.attachEvent('onblur',function(e){
				var value=search.value;
				var data_value=search.getAttribute('data-value');
				if(!value.replace(/^\s*((.|\n)*\S)?\s*$/,'$1')){
					search.value=data_value;
				}
			});
		}
	/*头部搜索框控制结束*/

	/*头部轮播控制开始*/
		var Slider=function(className,interval,bgColors){
			this.el=document.getElementsByClassName(className)[0];
			this.interval=interval||3000;
			this.index=0;
			this.bgColors=bgColors;
			this.handler=null;
			this.picWrappers=this.el.getElementsByTagName('li');
			this.controls=this.el.getElementsByClassName('indicator')[0];
			this.bgWrapper=document.getElementById('slider-wrapper');
			this.init();
		}

		Slider.prototype.init=function(){
			this.picWrappers[0].style.zIndex=1;
			this.picWrappers[0].style.opacity=1;
			this.controls.getElementsByTagName('a')[0].className="active";
			this.bgWrapper.style.backgroundColor=this.bgColors[0];
			var self=this;
			for(var i=0,len=this.controls.getElementsByTagName('a').length;i<len;i++){
				if(window.addEventListener){
					(function(index){
						self.controls.getElementsByTagName('a')[index].addEventListener('mouseover',function(e){
							for(var j=0,len=self.controls.getElementsByTagName('a').length;j<len;j++){
								self.controls.getElementsByTagName('a')[j].className='';
							}
							clearInterval(self.handler);
							self.controls.getElementsByTagName('a')[self.index].className='active';
							self.change(index);
						});
						self.controls.getElementsByTagName('a')[index].addEventListener('mouseout',function(e){
							self.run();
						});
					})(i);
				}else if(window.attachEvent){
					(function(index){
						self.controls.getElementsByTagName('a')[index].attachEvent('onmouseover',function(e){
							for(var j=0,len=self.controls.getElementsByTagName('a').length;j<len;j++){
								self.controls.getElementsByTagName('a')[j].className='';
							}
							self.controls.getElementsByTagName('a')[self.index].className='active';
							self.change(index);
						});
						self.controls.getElementsByTagName('a')[index].attachEvent('onmouseout',function(e){
							self.run();
						});
					})(i);
				}
			}
			for(var i=0,len=this.picWrappers.length;i<len;i++){
				if(window.addEventListener){
					(function(index){
						self.picWrappers[index].addEventListener('mouseover',function(){
							clearInterval(self.handler);
						});
						self.picWrappers[index].addEventListener('mouseout',function(){
							self.run();
						});
					})(i);
				}else if(window.attachEvent){
					(function(index){
						self.picWrappers[index].attachEvent('onmouseover',function(){
							clearInterval(self.handler);
						});
						self.picWrappers[index].attachEvent('onmouseout',function(){
							self.run();
						});
					})(i);
				}
			}
		}

		Slider.prototype.run=function(){
			var self=this;
			this.handler=setInterval(function(){
				var nextIndex=self.index===self.picWrappers.length-1?0:(self.index+1);
				self.change(nextIndex);
			},self.interval);
		}

		Slider.prototype.change=function(nextIndex){
			var self=this;
			if(Number(this.picWrappers[nextIndex].style.opacity)===1){
				return;
			}
			var change=setInterval(function(){
				if(Number(self.picWrappers[nextIndex].style.opacity)===1&&Number(self.picWrappers[self.index].style.opacity)===0){
					self.picWrappers[self.index].style.zIndex=0;
					clearInterval(change);
					self.setIndicator(nextIndex);
					self.index=nextIndex;
					self.bgWrapper.style.backgroundColor=self.bgColors[nextIndex];
				}else{
					if(Number(self.picWrappers[nextIndex].style.opacity)===0){
						self.picWrappers[nextIndex].style.zIndex=1;
						self.picWrappers[nextIndex].style.opacity=1;
					}
					if(Number(self.picWrappers[self.index].style.opacity)===1){
						self.picWrappers[self.index].style.zIndex=1;
						self.picWrappers[self.index].style.opacity=0;
					}
				}
			},50);
		}

		Slider.prototype.setIndicator=function(index){
			for(var i=0,len=this.controls.getElementsByTagName('a').length;i<len;i++){
				this.controls.getElementsByTagName('a')[i].className='';
				if(i===index){
					this.controls.getElementsByTagName('a')[index].className='active';
				}
			}
		}

		var s=new Slider('slider',3000,['rgb(255,204,84)','rgb(253,203,202)','rgb(101,212,244)','rgb(179,215,231)','rgb(167,212,242)']);
		s.run();
	/*头部轮播控制结束*/
})();