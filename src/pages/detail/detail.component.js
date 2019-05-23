import Vue from 'vue';
import pageService from '../../service/pageService'
export default Vue.extend({
    data() {
        return {
            activityDetail: "",
            //日期
            dateindex: -1,
            datepicker: [],
            datePickerModel: [],
            //种类
            eventindex: -1,
            eventpicker: [],
            eventPickerModel: [],
            //时间
            timeindex: -1,
            timepicker: [],
            //语言
            languageindex: -1,
            languagepicker: [],
            //门票
            ticketindex: -1,
            ticketpicker: [],
            //数量
            ticketNum: 1,
            //总价
            totalPrice: 0
        }
    },
    onLoad() {
        console.log(this.dateindex && this.eventindex && this.timeindex && this.languageindex && this.ticketindex);
        this.activityDetail = wx.getStorageSync('detail');
        this.totalPrice = this.activityDetail.original_retail_price.value
        this.getDates(this.activityDetail.uuid);
    },
    methods: {
        //获取该活动下可用日期
        PickerDateChange(e) {
            this.dateindex = e.detail.value;
            //重置各选信息
            this.eventindex = -1;
            this.timeindex = -1;
            this.languageindex = -1;
            this.ticketindex = -1;
            this.ticketNum = 1;
            //计算总价
            this.totalPrice = this.datePickerModel[this.dateindex].original_retail_price.value * this.ticketNum;
            this.getEvent(this.activityDetail.uuid, this.datepicker[this.dateindex]);
        },
        //获取该活动下可用日期
        getDates(uuid) {
            pageService.getDates(uuid).then(res => {
                this.datePickerModel = res;
                this.datepicker = res.map(v => v.day);
            })
        },
        //获取该活动下所选日期的可用种类
        PickerEventChange(e) {
            this.eventindex = e.detail.value;
            //重置各选信息
            this.timeindex = -1;
            this.languageindex = -1;
            this.ticketindex = -1;
            this.ticketNum = 1;
            //计算总价
            this.totalPrice = this.datePickerModel[this.dateindex].original_retail_price.value * this.ticketNum;
            this.getTimes();
        },
        //获取该活动下所选日期的可用种类
        getEvent(uuid, day) {
            this.eventindex = -1;
            pageService.getEvent(uuid, day).then(res => {
                this.eventPickerModel = res[0].groups;
                this.eventpicker = this.eventPickerModel.map(v => v.name);
            })
        },
        //获取该活动下所选日期的可用种类
        PickerTimeChange(e) {
            this.timeindex = e.detail.value;

            //重置各选信息
            this.languageindex = -1;
            this.ticketindex = -1;
            this.ticketNum = 1;
            //计算总价
            this.totalPrice = this.datePickerModel[this.dateindex].original_retail_price.value * this.ticketNum;
            this.getLanguages();
            this.getTickets();
        },
        //获取该活动下所选日期所选分类的时间
        getTimes() {
            this.timepicker = this.eventPickerModel[this.eventindex].slots.map(v => v.time);
        },
        //获取语言
        PickerLanguageChange(e) {
            //重置各选信息
            this.ticketindex = -1;
            this.ticketNum = 1;
            this.languageindex = e.detail.value;
        },
        //获取语言
        getLanguages() {
            this.languagepicker = this.eventPickerModel[this.eventindex].slots[this.timeindex].languages.map(v => v.name);
        },
        //获取门票
        PickerTicketChange(e) {
            this.ticketindex = e.detail.value;
            //重置各选信息
            this.ticketNum = 1;
            this.totalPrice = this.eventPickerModel[this.eventindex].slots[this.timeindex].products[this.ticketindex].retail_price.value * this.ticketNum;
        },
        //获取门票
        getTickets() {
            this.ticketpicker = this.eventPickerModel[this.eventindex].slots[this.timeindex].products.map(v => v.name);
        },
        //修改商品数量
        modifyCount(status) {
            if (status == 'add') {
                this.ticketNum++
            }
            else {
                if (this.ticketNum !== 0) {
                    this.ticketNum--
                }
            }
            this.totalPrice = this.eventPickerModel[this.eventindex].slots[this.timeindex].products[this.ticketindex].retail_price.value * this.ticketNum;
        },
        //支付
        payment() {
            if (this.dateindex !== -1 && this.eventindex !== -1 && this.timeindex !== -1 && this.languageindex !== -1 && this.ticketindex !== -1) {
                
            }
            else {
                alert("请先完善购票信息");
            }
        }

    }
});