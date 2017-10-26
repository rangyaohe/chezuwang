<template>
	<div class="k_gg">
		<div class="k_content">
			<div class="k_content_top">
				<a href="###">全部</a>
				<a href="###">未使用</a>
				<a href="###">已过期</a>
				<a href="###">已退款</a>
				<a href="###">待评价</a>
				<a href="###">美梦成真</a>
			</div>
			<table class="k_content_center" cellspacing="0">
				<tr>
					<th>团购项目</th>
					<th>数量</th>
					<th>金额</th>
					<th>订单状态</th>
					<th>操作</th>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>未付款
						<a href="###" style="display: block;" class="details">订单详情</a>
					</td>
					<td>
						<a href="###">付款</a>
						<a href="###">删除订单</a>
					</td>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>未付款
						<a href="###" style="display: block;" class="details">订单详情</a>
					</td>
					<td>
						<a href="###">付款</a>
						<a href="###">删除订单</a>
					</td>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>未付款
						<a href="###" style="display: block;" class="details">订单详情</a>
					</td>
					<td>
						<a href="###">付款</a>
						<a href="###">删除订单</a>
					</td>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>未付款
						<a href="###" style="display: block;" class="details">订单详情</a>
					</td>
					<td>
						<a href="###">付款</a>
						<a href="###">删除订单</a>
					</td>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>未付款
						<a href="###" style="display: block;" class="details">订单详情</a>
					</td>
					<td>
						<a href="###">付款</a>
						<a href="###">删除订单</a>
					</td>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>未付款
						<a href="###" style="display: block;" class="details">订单详情</a>
					</td>
					<td>
						<a href="###">付款</a>
						<a href="###">删除订单</a>
					</td>
				</tr>
			</table>
			<div class="k_dang">
				<div class="k_delete">
					<span class="k_delete_top"><span>来自网页的信息 </span><img src="../../assets/mycar-image/zz.png" /></span>
					<div class="k_delete_cont">
						<img src="../../assets/mycar-image/suv.png" /><br />
						<img src="../../assets/mycar-image/yes.png" />
						<img src="../../assets/mycar-image/no.png" />
					</div>
				</div>
			</div>
		</div>
		<div class="k_contentA">
			<div class="k_contentA_top">
				<span>订单详情</span>
				<span class="return">返回我的订单</span>
			</div>
			<div class="k_contentA_contA">
				<span>当前订单状态: <strong>未付款</strong></span></br>
				<span>请及时付款, 不然就被抢光啦!</span></br>
				<button class="payment">付款</button>
				<a href="###" class="remove">删除</a>
			</div>
			<div class="k_contentA_contB">
				<div class="message">
					<h4>订单信息</h4>
				</div>
				<div class="messageA">
					<span>订单编号: 214855124</span>
					<span>下单时间: 2013-07-06 21:25</span>
				</div>
				<div class="messageB">
					<h4>团购信息</h4>
				</div>
				<div class="messageC">
					<span>团购项目</span>
					<span><em>单价</em><em>数量</em><em>支付金额</em></span><br />
					<a href="###">嘉华国际影城单人电影票</a>
					<span class="money">¥30</span>
					<span class="ride">✖️</span>
					<span class="count">1️</span>
					<span class="equal️">=</span>
					<span class="value">¥30</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import './indent.css'
	export default {
		name: "Indent",
		mounted() {
			$(".k_content_center>tr>td:nth-child(5)>a:nth-child(2)").click(function() {
				$(".k_dang").css("display", "block");
			})
			$(".k_delete_top img").click(function() {
				$(".k_dang").css("display", "none");
			});
			$(".return").click(function() {
				$(".k_contentA").css("display","none");
				$(".k_content").css("display","block");
			});
			$(".details").click(function() {
				$(".k_contentA").css("display","block");
				$(".k_content").css("display","none");
			});
		}
	}
</script>

<style>

</style>