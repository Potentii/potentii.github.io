import {TypeUtils} from "@potentii/type-utils";

export default class BlogPost{
	/**
	 * @type {string}
	 */
	id;
	/**
	 * @type {string}
	 */
	title;
	/**
	 * @type {string[]}
	 */
	tags;



	/**
	 *
	 * @param {string} id
	 * @param {string} title
	 * @param {string[]} tags
	 */
	constructor(id, title, tags) {
		TypeUtils.typeOf.checkValue('BlogPost.id', id, 'string', true);
		TypeUtils.typeOf.checkValue('BlogPost.title', title, 'string', true);
		TypeUtils.typeOf.checkArray('BlogPost.tags', tags, 'string', true, true);
		this.id = id;
		this.title = title;
		this.tags = tags;
	}



	/**
	 *
	 * @param {object|BlogPost} obj
	 * @return {?BlogPost}
	 */
	static from(obj){
		if(!obj)
			return null;

		return new BlogPost(
			obj.id,
			obj.title,
			obj.tags,
		);
	}
}