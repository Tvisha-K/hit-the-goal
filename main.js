canvas = new fabric.Canvas('my_canvas');

ball_x = 0;

ball_y = 0;

goal_y = 400;

goal_x = 800;

block_image_width = 5;

block_image_height = 5;

function load_img() {

	fabric.Image.fromURL("goal.png" , function (Img){

		goal_obj = Img;

		goal_obj.scaleToHeight(50);

		goal_obj.scaleToWidth(50);

		goal_obj.set ({

			top : goal_y,

			left : goal_x

		});

		canvas.add(goal_obj);

	});

	new_image();
	
}

function new_image() {

	fabric.Image.fromURL("ball.png" , function (Img){

		ball_obj = Img;

		ball_obj.scaleToHeight(50);

		ball_obj.scaleToWidth(50);

		ball_obj.set ({

			top : ball_y,

			left : ball_x

		});

		canvas.add(ball_obj);

	});

	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

	keyPressed = e.keyCode;

	console.log(keyPressed);

	if ((ball_x == goal_x ) && (ball_y == goal_y)) {

		console.log("ball and goal at the same place")

		canvas.remove(ball_obj);

		
		document.getElementById("hd3").innerHTML = "You Have Hit The Goal!!";

		document.getElementById("my_canvas").style.borderColor = "red";

	}
	
	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		
		if (ball_y >= 0){

			ball_y = ball_y - block_image_height;
	
			canvas.remove(ball_obj); 
	
			new_image();
	
		}

	}

	function down() {
		
		if (ball_y <= 450){

			ball_y = ball_y + block_image_height;
	
			canvas.remove(ball_obj);
	
			new_image();
	
		}
	

	}

	function left() {
	
		if (ball_x >= 0 ){

			ball_x = ball_x - block_image_width;
	
			canvas.remove(ball_obj);

			new_image();
		
		}
	}

	function right() {
		
		if (ball_x <= 1050){

			ball_x = ball_x + block_image_width;
	
			canvas.remove(ball_obj);
	
			new_image();
	
		}
		


	}

}