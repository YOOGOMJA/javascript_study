console.log("Hello");
_BOARD.methods.ui.init();

var _BOARD = _BOARD || {
    config : {
        url : 'http://syunoti.cafe24app.com/api/boards/get',
        method : 'GET',
        connectState : false
    },
    methods : {
        ui : {
            init : function(){
                // UI를 초기화하고 값을 할당해줄 함수입니다.
            },
            search : function(){
                // 검색 버튼을 눌렀을 떄 실행될 함수입니다.
            },
            reset : function(){
                // 초기화 버튼을 눌렀을 때 실행될 함수입니다.
            }
        },
        board : {
            init : function(data){
                // 게시판 내용을 채울 함수입니다.
            }      
        },
        _data : {
            load : function(options , callback){
                // 데이터를 가져오는 함수입니다. 
                // jquery ajax함수는 여기서 사용합니다.

                
            }
        }
    }
}


$.ajax = function(){
    var result = {};
    result.then = function(success, fail){

    }
    return result;
}

$(function(){
    _BOARD.methods._data.load({},function(res){
       
    });
});
