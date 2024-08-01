package com.example.salesapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {

    private lateinit var productAdapter: ProductAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val recyclerView = findViewById<RecyclerView>(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(this)
        
        productAdapter = ProductAdapter(getProducts())
        recyclerView.adapter = productAdapter
    }

    private fun getProducts(): List<Product> {
        // Sample data
        return listOf(
            Product("Product 1", "Description of Product 1", 10.0),
            Product("Product 2", "Description of Product 2", 20.0)
        )
    }
}