
import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import { tick } from '../../assets/images/index';
import { SAMPLE_DATA } from "utils/constants";
import styles from './styles'

interface SubCategory {
    id: number;
    title: string;
    subCategory?: SubCategory[];
}

interface SampleData {
    id: number;
    title: string;
    selected?: boolean;
    subCategory?: SubCategory[];
}

const ProductsData: React.FC = () => {

    const [selectedProducts, setSelectdProducts] = useState<SampleData[]>([]);
    const [selectedProductVariants, setSelectedProductVariants] = useState<string[]>([]);
    const [sampleData, setSampleData] = useState<SampleData[]>(SAMPLE_DATA);

    const onItemPress = (item: SampleData, isSelected: boolean, parentItem?: SampleData) => {
        let selectedTypesTemp = [...selectedProducts];
        let selectedProductVariantsTemp = [...selectedProductVariants];
        if (isSelected) {
            selectedTypesTemp = selectedTypesTemp.filter((_item) => _item.id !== item.id);
            if (item.subCategory?.length > 0) {
                selectedProductVariantsTemp = selectedProductVariantsTemp.filter((_item) => _item !== `all ${item.title} devices selected`);
            }
            else {
                selectedProductVariantsTemp = selectedProductVariantsTemp.filter((_item) => _item !== `${parentItem?.title} ${item.title} selected`);
            }
        } else {
            selectedTypesTemp.push(item);
            if (item.subCategory?.length > 0) {
                selectedProductVariantsTemp.push(`all ${item.title} devices selected`);
            }
            else {
                selectedProductVariantsTemp.push(`${parentItem?.title} ${item.title} selected`);
            }
        }
        setSelectdProducts(selectedTypesTemp);
        setSelectedProductVariants(selectedProductVariantsTemp);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {sampleData.map((item, _index) => {
                    const isSelected = selectedProducts.findIndex((_item) => _item.id === item.id) > -1;
                    return (
                        <View key={item.id} style={{ padding: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        onItemPress(item, isSelected);
                                    }}
                                    style={styles.boxStyle}>
                                    {isSelected && <Image style={{ width: 15, height: 15, resizeMode: "contain" }} source={tick} />}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    let tempData = [...sampleData];
                                    tempData[_index].selected = !tempData[_index].selected;
                                    setSampleData(tempData);
                                }}>
                                    <Text>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                            {item.selected && item.subCategory?.map((subItem, index) => {
                                const isSelected = selectedProducts.findIndex((_item) => _item.id === subItem.id) > -1;
                                return (
                                    <View key={subItem.id} style={{ padding: 10 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <TouchableOpacity
                                                style={styles.boxStyle}
                                                onPress={() => {
                                                    onItemPress(subItem, isSelected, item);
                                                }}
                                            >
                                                {isSelected && <Image style={{ width: 15, height: 15, resizeMode: "contain" }} source={tick} />}
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {
                                                let tempData = [...sampleData];
                                                tempData[_index].subCategory![index].selected = !tempData[_index].subCategory![index].selected;
                                                setSampleData(tempData);
                                            }}>
                                                <Text>{subItem.title}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {subItem.selected && subItem.subCategory?.map((subSubItem, index3) => {
                                            const isSelected = selectedProducts.findIndex((_item) => _item.id === subSubItem.id) > -1;
                                            return (
                                                <View key={subSubItem.id} style={{ padding: 10 }}>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <TouchableOpacity
                                                            style={styles.boxStyle}
                                                            onPress={() => {
                                                                onItemPress(subSubItem, isSelected, subItem);
                                                            }}
                                                        >
                                                            {isSelected && <Image style={{ width: 15, height: 15, resizeMode: "contain" }} source={tick} />}
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => {
                                                            let tempData = [...sampleData];
                                                            tempData[_index].subCategory![index].subCategory![index3].selected = !tempData[_index].subCategory![index].subCategory![index3].selected;
                                                            setSampleData(tempData);
                                                        }}>
                                                            <Text>{subSubItem.title}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {subSubItem.selected && subSubItem.subCategory?.map((subSubSubItem, index4) => {
                                                        const isSelected = selectedProducts.findIndex((_item) => _item.id === subSubSubItem.id) > -1;
                                                        return (
                                                            <View key={subSubSubItem.id} style={{ padding: 10 }}>
                                                                <View style={{ flexDirection: "row" }}>
                                                                    <TouchableOpacity
                                                                        style={styles.boxStyle}
                                                                        onPress={() => {
                                                                            onItemPress(subSubSubItem, isSelected, subSubItem);
                                                                        }}
                                                                    >
                                                                        {isSelected && <Image style={{ width: 15, height: 15, resizeMode: "contain" }} source={tick} />}
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity onPress={() => {
                                                                        let tempData = [...sampleData];
                                                                        tempData[_index].subCategory![index].subCategory![index3].subCategory![index4].selected = !tempData[_index].subCategory![index].subCategory![index3].subCategory![index4].selected;
                                                                        setSampleData(tempData);
                                                                    }}>
                                                                        <Text>{subSubSubItem.title}</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        )
                                                    })}
                                                </View>
                                            )
                                        })}
                                    </View>
                                )
                            })}
                        </View>
                    )
                })}
            </ScrollView>
            <View style={{ margin: 20 }}>
                <Text style={{ fontWeight: "bold" }}>Selected Variants:</Text>
                <View style={{ flexDirection: "row", flexWrap: 'wrap', gap: 10 }}>
                    {selectedProductVariants.map((item, index) => {
                        return (
                            <View key={index} style={styles.selectedVariantView}>
                                <Text>{item}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        </SafeAreaView>
    )
};

export default ProductsData;
