<?php

namespace App\Http\Controllers;

use App\Post;
use App\Category;
use Illuminate\Http\Request;

class PostController extends Controller
{
	public function all_posts(){
		$posts = Post::with('user','category')->get();
		return $posts;
	}  

	// public function all_categories(){
	// 	$categories = Category::all();
	// 	foreach ($categories as $cat) {
	// 		return $cat->posts;
	// 	}
	// }  
	// public function all_categories(){
	// 	$categories = Category::with('posts')->get();
	// 	return $categories;
	// }    
}
