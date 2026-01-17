package com.exampleinventory.demoinventorysystem.controller;

import com.exampleinventory.demoinventorysystem.entity.Inventory;
import com.exampleinventory.demoinventorysystem.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin
@RequiredArgsConstructor
public class InventoryController {

    private final InventoryService service;

    @PostMapping
    public Inventory addItem(@RequestBody Inventory item) {
        return service.addItem(item);
    }

    @GetMapping
    public List<Inventory> getItems() {
        return service.getAllItems();
    }

    @PutMapping("/{id}")
    public Inventory updateItem(@PathVariable Long id,
                                @RequestBody Inventory item) {
        return service.updateItem(id, item);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        service.deleteItem(id);
    }
}

