import { useGetSushiQuery } from "@/store";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Arrow from "../assets/images/Arrow.svg"

export default function HomePage () {
    const { data, isLoading, isError } = useGetSushiQuery({})
    const getLimitedComposition = (composition: Array<string>) => {
        if (Array.isArray(composition)) {
            const fullComposition = composition.join(", "); 
            if (fullComposition.length > 55) {
                return fullComposition.slice(0, 55) + "..."; 
            }
            return fullComposition; 
        }
        return ""; 
    };
    return (
        <ScrollView>
            <View className="bg-[#181715] flex-row flex-wrap justify-between h-full p-4">
            {   
                !isLoading && data && data.map(data => 
                    <View key={data.id} className="items-start mb-7">
                        <Image width={187} height={187} source={{uri: data.imageUrl}} className="rounded-xl"/>                           
                        <View className="flex-row mt-3">
                            <Text className="text-white mb-2 text-sm font-semibold">
                                {data.name}
                            </Text>
                            <Text className="text-[#959492] ml-2 text-sm">
                                210 г
                            </Text>
                        </View>
                        <View className="flex-row max-w-[180px] min-h-[28] flex-wrap">
                            {
                                <Text className="text-[#959492] text-xs pr-1">
                                    {getLimitedComposition(data.composition)}
                                </Text>   
                            }    
                        </View>
                        <TouchableOpacity className="items-center flex-row justify-center w-24 mt-4 rounded-xl h-10 bg-[#363533]">
                            <Text className="text-white text-base font-medium mr-1">
                                {
                                    data.price
                                }
                            </Text>
                            <Text className="text-white text-base font-medium mr-2">
                                {
                                    data.currency
                                }
                            </Text>
                            <Arrow width={13} height={13} className=""/>
                        </TouchableOpacity>
                    </View>             
                )   
            }
            </View>
        </ScrollView>
    );
};