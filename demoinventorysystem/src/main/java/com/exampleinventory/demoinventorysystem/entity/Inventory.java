package com.exampleinventory.demoinventorysystem.entity;

import com.exampleinventory.demoinventorysystem.enums.InventoryStatus;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemName;
    private String category;
    private int quantity;

    @Enumerated(EnumType.STRING)
    private InventoryStatus status;
}

