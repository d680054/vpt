package com.hj.vpt.model.myki;

import lombok.Data;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Objects;

/**
 * @author David.Zheng
 * @date 2019-01-28
 */
@Data
public class MykiInfo {

    private String cardNum;
    private String holder;
    private String mykiMoney;
    private String mykiPass;
    private String type;
    private String expiry;
    private String selfLink;
    private String color;
    private String lastTransaction;
    private String status;
    private boolean expired;
    private boolean show = true;

    private List<MykiTransaction> transactions;

    public boolean getExpired() {
        if(Objects.isNull(this.getExpiry())) {
            return false;
        }
        return LocalDate.parse(this.getExpiry(), DateTimeFormatter.ofPattern("d MMM yyyy")).isBefore(LocalDate.now());
    }
}
