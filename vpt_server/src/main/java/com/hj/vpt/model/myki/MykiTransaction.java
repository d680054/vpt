package com.hj.vpt.model.myki;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @author David.Zheng
 * @date 2019-02-02
 */
@Data
public class MykiTransaction {

    private String Date;

    private List<TransactionDetail> transactionDetailList = new ArrayList<>();

    public void addTransactionDetail(TransactionDetail transactionDetail) {
        transactionDetailList.add(transactionDetail);
    }

    @Data
    public static class TransactionDetail {

        private String time;

        private String type;

        private String service;

        private String zone;

        private String desc;

        private String credit;

        private String debit;

        private String balance;

    }
}

//@Data
//public class TransactionDetail {
//    private String time;
//
//    private String type;
//
//    private String service;
//
//    private String zone;
//
//    private String desc;
//
//    private String credit;
//
//    private String debit;
//
//    private String balance;
//}
