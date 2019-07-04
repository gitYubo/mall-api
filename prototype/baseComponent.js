import Ids from '../models/ids'
import crypto from 'crypto'

export default class BaseComponent {
	constructor() {
		this.idList = ['memberId', 'configId', 'goodsId', 'catId','tagId'];
	}
	//获取id列表
	async getId(type) {
		if (!this.idList.includes(type)) {
			console.log('id类型错误');
			throw new Error('id类型错误');
			return
		}
		try {
			const idData = await Ids.findOne();
			idData[type]++;
			await idData.save();
			return idData[type]
		} catch (err) {
			console.log('获取ID数据失败');
			throw new Error(err)
		}
	}
	encryption(password) {
		const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
		return newpassword
	}
	Md5(password) {
		const md5 = crypto.createHash('md5');
		return md5.update(password).digest('base64');
	}
}