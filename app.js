log = console.log;
;(function() {
	var App = function( className ) {
		var camera, scene, renderer,
		geometry, material, mesh;

		init();
		animate();

		function init() {

		scene = new THREE.Scene();
		


		camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 1000;
		scene.add( camera );

		texture = THREE.ImageUtils.loadTexture('img/car.jpg'),

		geometry = new THREE.CubeGeometry( 200, 200, 200 );
		material = new THREE.MeshBasicMaterial( { 
			color: 0xff0000,
			wireframe: true,
			map: texture
		} );

		mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );

		renderer = new THREE.CanvasRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );

		document.body.appendChild( renderer.domElement );

		}

		function animate() {

		// note: three.js includes requestAnimationFrame shim
		requestAnimationFrame( animate );
		render();

		}

		function render() {

		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.02;

		renderer.render( scene, camera );

		}
	}
	jQuery( function() {
		new App( '.canvas' );
	});
})();
