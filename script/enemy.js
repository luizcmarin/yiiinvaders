/**
 * Class Enemy
 * @param initPosX - initial position xx
 * @param initPosY - initial position yy
 */
function Enemy(initPosX, initPosY, imagem) {
	var imgSrc = [
		'script/images/1.png',
		'script/images/2.png',
		'script/images/3.png',
		'script/images/4.png',
		'script/images/5.png',
		'script/images/6.png',
		'script/images/7.png',
		'script/images/8.png',
		'script/images/9.png',
		'script/images/10.png',
		'script/images/11.png',
		'script/images/12.png',
		'script/images/13.png',
		'script/images/14.png',
		'script/images/15.png',
		'script/images/16.png',
		'script/images/17.png',
		'script/images/18.png',
		'script/images/19.png',
		'script/images/20.png',
		'script/images/21.png',
		'script/images/22.png',
		'script/images/23.png',
		'script/images/24.png',
		'script/images/25.png',
		'script/images/26.png'
	];
	//	var imgSrc = 'script/images/enemy.png';
	//	var imgSrc = 'script/images/ship.png';
	//width
	this.width = 22;
	//height
	this.height = 16;

	//enemy sprite
	var sprite = new Sprite(3);
	//set image and size
	sprite.initImage(imgSrc[imagem], this.width, this.height);
	//set initial position of the sprite
	sprite.initPosition(initPosX, initPosY);

	//initial action
	var currentAction = 'left';

	/**
	 * Draws the enemy sprite
	 */
	this.draw = function () {
		sprite.draw();
	}

	/**
	 * Simulates one step of the enemy
	 * @param action - indicates the action of the enemy
	 */
	this.step = function () {
		if (currentAction == 'left') {
			sprite.moveLeft();
		} else if (currentAction == 'right') {
			sprite.moveRight();
		}
	}

	/**
	 * Simulates one jump forward
	 */
	this.jump = function () {
		if (currentAction == 'left') {
			currentAction = 'right';
		} else {
			currentAction = 'left';
		}
		sprite.moveFront();
	}

	/**
	 * Verifies if the enemies needs to change of action
	 */
	this.checkStep = function () {
		if (sprite.x <= 10 && currentAction == 'left') {
			currentAction = 'right';
		} else if (sprite.x >= (WINDOW_WIDTH - 10) && currentAction == 'right') {
			currentAction = 'left';
		}
		return currentAction;
	}

	/**
	 * Return the position xx of the enemy
	 */
	this.getPositionX = function () {
		return sprite.x;
	}

	/**
	 * Return the position yy of the enemy
	 */
	this.getPositionY = function () {
		return sprite.y;
	}
}
